import { useState, useCallback } from 'react';
import { api, API_ENDPOINTS } from '@/utils/api';

export const useDinner = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDinners = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams();
      
      if (params.index !== undefined) queryParams.append('index', params.index);
      if (params.offset !== undefined) queryParams.append('offset', params.offset);
      if (params.search) queryParams.append('search', params.search);
      if (params.start_date) queryParams.append('start_date', params.start_date);

      const response = await api.get(`${API_ENDPOINTS.DINNER_LIST}?${queryParams}`);
      if (response.success) {
        return {
          data: response.data || [],
          total: response.total || 0
        };
      }
      return { data: [], total: 0 };
    } catch (err) {
      setError(err.message || 'Failed to fetch dinners');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getDinner = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      // Since there's no single dinner endpoint, fetch from list and filter
      const response = await api.get(`${API_ENDPOINTS.DINNER_LIST}?index=0&offset=100`);
      if (response.success && response.data) {
        const dinner = response.data.find(d => d.id === id);
        if (dinner) {
          return dinner;
        }
        throw new Error('Dinner not found');
      }
      return null;
    } catch (err) {
      setError(err.message || 'Failed to fetch dinner');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createDinner = useCallback(async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post(API_ENDPOINTS.DINNER_CREATE, data);
      if (response.success) {
        return response.data;
      }
      throw new Error(response.message || 'Failed to create dinner');
    } catch (err) {
      setError(err.message || 'Failed to create dinner');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateDinner = useCallback(async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const payload = { ...data, dinner_id: id };
      const response = await api.put(API_ENDPOINTS.DINNER_UPDATE, payload);
      if (response.success) {
        return response.data;
      }
      throw new Error(response.message || 'Failed to update dinner');
    } catch (err) {
      setError(err.message || 'Failed to update dinner');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteDinner = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.delete(API_ENDPOINTS.DINNER_DELETE(id));
      if (response.success || response.status === 204) {
        return true;
      }
      return true;
    } catch (err) {
      // If the error response is success, consider it done
      if (err.response && err.response.data && err.response.data.success) return true;
      
      setError(err.message || 'Failed to delete dinner');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    getDinners,
    getDinner,
    createDinner,
    updateDinner,
    deleteDinner
  };
};
