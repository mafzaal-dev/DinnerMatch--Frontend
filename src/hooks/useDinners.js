import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api, API_ENDPOINTS } from '../utils/api';

const hasAccessToken = () =>
  typeof window !== 'undefined' && !!localStorage.getItem('access_token');

async function fetchDinnerDetailData(dinnerId) {
  if (!dinnerId) return null;
  const response = await api.get(
    `${API_ENDPOINTS.DINNER_DETAIL}?dinner_id=${dinnerId}`,
  );
  if (!response.success) {
    throw new Error(response.message || 'Failed to fetch dinner details');
  }
  return response.data;
}

function normalizeSubscriptionPayload(raw) {
  if (raw == null) return [];
  if (Array.isArray(raw)) return raw;
  return [raw];
}

export const useSubscription = () => {
  return useQuery({
    queryKey: ['subscription'],
    queryFn: async () => {
      const response = await api.get(API_ENDPOINTS.USER_SUBSCRIPTIONS);
      if (!response.success) {
        throw new Error('Failed to fetch subscription');
      }
      const raw =
        response.data?.subscription ?? response.subscription ?? [];
      return normalizeSubscriptionPayload(raw);
    },
    enabled: hasAccessToken(), // Only fetch when user is logged in
  });
};

export const useRequestedDinners = (index = 0, offset = 10) => {
  return useQuery({
    queryKey: ['requestedDinners', index, offset],
    queryFn: async () => {
      const response = await api.get(`${API_ENDPOINTS.DINNER_REQUESTS_ME}?index=${index}&offset=${offset}`);
      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch dinners');
      }
      // Return the data array directly for easier usage, or the whole response if needed
      return response.data || [];
    },
  });
};

export const useDinnerDetail = (dinnerId) => {
  return useQuery({
    queryKey: ['dinnerDetail', dinnerId],
    queryFn: () => fetchDinnerDetailData(dinnerId),
    enabled: !!dinnerId, // Only fetch if dinnerId is present
  });
};

export const useUpdateAttendance = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ dinnerId, status }) => {
      const response = await api.put(API_ENDPOINTS.ATTENDANCE_UPDATE, {
        dinner_id: dinnerId,
        status: status,
      });
      
      if (!response.success) {
        throw new Error(response.message || 'Failed to update attendance');
      }
      return response.data;
    },
    onSuccess: (_, variables) => {
      // Invalidate relevant queries to refresh data
      queryClient.invalidateQueries(['dinnerDetail', variables.dinnerId]);
      queryClient.invalidateQueries(['requestedDinners']);
    },
  });
};

/**
 * @param {string} [startDate] - YYYY-MM-DD (e.g. today)
 * @param {{ index?: number, offset?: number, cityId?: string, dinnerStatus?: string, enabled?: boolean }} [options]
 */
export const useAvailableDinners = (startDate, options = {}) => {
  const {
    index = 0,
    offset = 50,
    cityId,
    dinnerStatus,
    enabled = true,
  } = options;

  return useQuery({
    queryKey: [
      'availableDinners',
      startDate,
      index,
      offset,
      cityId ?? null,
      dinnerStatus ?? null,
    ],
    queryFn: async () => {
      const params = {
        index,
        offset,
      };
      if (startDate) {
        params.start_date = startDate;
      }
      if (cityId) {
        params.city_id = cityId;
      }
      if (dinnerStatus) {
        params.dinner_status = dinnerStatus;
      }

      const response = await api.get(API_ENDPOINTS.DINNER_LIST, { params });

      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch available dinners');
      }
      return response.data || [];
    },
    enabled,
  });
};

export const useRequestDinner = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ dinnerId }) => {
      const response = await api.post(API_ENDPOINTS.DINNER_MAKE_REQUEST, {
        dinner_id: dinnerId
      });
      
      if (!response.success) {
        throw new Error(response.message || 'Failed to request dinner');
      }
      return response.data;
    },
    onSuccess: async (_, { dinnerId }) => {
      await queryClient.refetchQueries({ queryKey: ['requestedDinners'] });
      await queryClient.refetchQueries({ queryKey: ['availableDinners'] });
      if (dinnerId) {
        await queryClient.fetchQuery({
          queryKey: ['dinnerDetail', dinnerId],
          queryFn: () => fetchDinnerDetailData(dinnerId),
        });
      }
    },
  });
};

export const useSwipeDinner = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ currentDinnerId, newDinnerId }) => {
      const response = await api.put(API_ENDPOINTS.DINNER_SWIPE, {
        current_dinner_id: currentDinnerId,
        new_dinner_id: newDinnerId
      });
      
      if (!response.success) {
        throw new Error(response.message || 'Failed to swipe dinner');
      }
      return response.data;
    },
    onSuccess: async (_, { newDinnerId }) => {
      await queryClient.refetchQueries({ queryKey: ['requestedDinners'] });
      await queryClient.refetchQueries({ queryKey: ['availableDinners'] });
      if (newDinnerId) {
        await queryClient.fetchQuery({
          queryKey: ['dinnerDetail', newDinnerId],
          queryFn: () => fetchDinnerDetailData(newDinnerId),
        });
      }
    },
  });
};

export const useRateGroup = () => {
  return useMutation({
    mutationFn: async ({ groupId, ratings }) => {
      const response = await api.post(API_ENDPOINTS.MEMBER_RATING, {
        group_id: groupId,
        ratings,
      });
      if (!response.success) {
        throw new Error(response.message || 'Failed to rate group');
      }
      return response.data;
    },
  });
};

export const useRateRestaurant = () => {
  return useMutation({
    mutationFn: async ({ restaurantId, rating, comment }) => {
      const response = await api.post(API_ENDPOINTS.RESTAURANT_RATING, {
        restaurant_id: restaurantId,
        rating,
        comment
      });
      if (!response.success) {
        throw new Error(response.message || 'Failed to rate restaurant');
      }
      return response.data;
    },
  });
};
