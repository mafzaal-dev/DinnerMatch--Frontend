import { useState, useCallback } from 'react';
import { api, API_ENDPOINTS } from '@/utils/api';

export const useRestaurant = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRestaurants = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams();
      
      if (params.index !== undefined) queryParams.append('index', params.index);
      if (params.offset !== undefined) queryParams.append('offset', params.offset);
      if (params.search) queryParams.append('search', params.search);
      if (params.rating) queryParams.append('rating', params.rating);
      if (params.budget) queryParams.append('budget', params.budget);
      if (params.location) queryParams.append('location', params.location);
      if (params.city) queryParams.append('city', params.city);

      const response = await api.get(`${API_ENDPOINTS.RESTAURANT_LIST}?${queryParams}`);
      if (response.success) {
        return {
          data: response.data || [],
          total: response.total || 0
        };
      }
      return { data: [], total: 0 };
    } catch (err) {
      setError(err.message || 'Failed to fetch restaurants');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getRestaurant = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      // Since there's no single restaurant endpoint, fetch from list and filter
      const response = await api.get(`${API_ENDPOINTS.RESTAURANT_LIST}?index=0&offset=100`);
      if (response.success && response.data) {
        const restaurant = response.data.find(r => r.id === id);
        if (restaurant) {
          return restaurant;
        }
        throw new Error('Restaurant not found');
      }
      return null;
    } catch (err) {
      setError(err.message || 'Failed to fetch restaurant');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createRestaurant = useCallback(async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post(API_ENDPOINTS.RESTAURANT_CREATE, data);
      if (response.success) {
        return response.data;
      }
      throw new Error(response.message || 'Failed to create restaurant');
    } catch (err) {
      setError(err.message || 'Failed to create restaurant');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateRestaurant = useCallback(async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const payload = { ...data, restaurant_id: id };
      const response = await api.put(API_ENDPOINTS.RESTAURANT_UPDATE, payload);
      if (response.success) {
        return response.data;
      }
      throw new Error(response.message || 'Failed to update restaurant');
    } catch (err) {
      setError(err.message || 'Failed to update restaurant');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteRestaurant = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.delete(API_ENDPOINTS.RESTAURANT_DELETE(id));
      if (response.success || response.status === 204) {
        return true;
      }
      return true;
    } catch (err) {
      // If the error response is success, consider it done
      if (err.response && err.response.data && err.response.data.success) return true;
      
      setError(err.message || 'Failed to delete restaurant');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    getRestaurants,
    getRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
  };
};
