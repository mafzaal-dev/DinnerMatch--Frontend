import { useState, useCallback } from 'react';
import { api, API_ENDPOINTS } from '@/utils/api';

export const useQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getQuestions = useCallback(async (search = '') => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (search) params.append('search', search);

      const endpoint = `${API_ENDPOINTS.QUIZ_QUESTIONS_LIST}?${params.toString()}`;
      const response = await api.get(endpoint);
      if (response.success) {
        return response.data;
      }
      return [];
    } catch (err) {
      setError(err.message || 'Failed to fetch questions');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getQuestion = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(API_ENDPOINTS.QUIZ_QUESTION_DETAIL(id));
      if (response.success && response.data) {
        // Endpoint returns a list filtered by ID, so take the first item
        return Array.isArray(response.data) ? response.data[0] : response.data;
      }
      return null;
    } catch (err) {
      setError(err.message || 'Failed to fetch question');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createQuestion = useCallback(async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post(API_ENDPOINTS.QUIZ_QUESTIONS_CREATE, data);
      if (response.success) {
        return response.data; // might be just success message, check usage
      }
      throw new Error(response.message || 'Failed to create question');
    } catch (err) {
      setError(err.message || 'Failed to create question');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateQuestion = useCallback(async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      // The API expects question_id in the body for update
      const payload = { ...data, question_id: id };
      const response = await api.put(API_ENDPOINTS.QUIZ_QUESTIONS_UPDATE, payload);
      if (response.success) {
        return response.data;
      }
      throw new Error(response.message || 'Failed to update question');
    } catch (err) {
      setError(err.message || 'Failed to update question');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteQuestion = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.delete(API_ENDPOINTS.QUIZ_QUESTIONS_DELETE(id));
      if (response.success || response.status === 204) { // Handle 204 No Content if applicable
        return true;
      }
      // Some APIs return success true even on delete
      return true;
    } catch (err) {
        // If the error response is success (some apis do this weirdly), consider it done
        if(err.response && err.response.data && err.response.data.success) return true;
        
      setError(err.message || 'Failed to delete question');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateQuestionOrder = useCallback(async (id, newOrder) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.put(API_ENDPOINTS.QUIZ_QUESTION_ORDER, {
        question_id: id,
        new_order: newOrder
      });
      if (response.success) {
        return true;
      }
      throw new Error(response.message || 'Failed to update order');
    } catch (err) {
      setError(err.message || 'Failed to update order');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    getQuestions,
    getQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion,
    updateQuestionOrder
  };
};
