import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api, API_ENDPOINTS } from '../utils/api';

const hasAccessToken = () =>
  typeof window !== 'undefined' && !!localStorage.getItem('access_token');

export const useSubscription = () => {
  return useQuery({
    queryKey: ['subscription'],
    queryFn: async () => {
      const response = await api.get(API_ENDPOINTS.USER_SUBSCRIPTIONS);
      if (!response.success) {
        throw new Error('Failed to fetch subscription');
      }
      // Return data object if subscription doesn't exist to prevent undefined error
      return response.data?.subscription || response.subscription || [];
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
    queryFn: async () => {
      if (!dinnerId) return null;
      const response = await api.get(`${API_ENDPOINTS.DINNER_DETAIL}?dinner_id=${dinnerId}`);
      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch dinner details');
      }
      return response.data;
    },
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
