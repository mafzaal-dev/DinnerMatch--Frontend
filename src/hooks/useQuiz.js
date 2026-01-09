import { useState, useCallback } from 'react';
import { api, API_ENDPOINTS } from '@/utils/api';

export const useQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- Questions ---

  const getQuestions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(API_ENDPOINTS.QUIZ_QUESTIONS);
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
      if (response.success) {
        return response.data;
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
      const response = await api.post(API_ENDPOINTS.QUIZ_QUESTIONS, data);
      if (response.success) {
        return response.data;
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
      const response = await api.patch(API_ENDPOINTS.QUIZ_QUESTION_DETAIL(id), data);
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
      const response = await api.delete(API_ENDPOINTS.QUIZ_QUESTION_DETAIL(id));
      if (response.success) {
        return true;
      }
      throw new Error(response.message || 'Failed to delete question');
    } catch (err) {
      setError(err.message || 'Failed to delete question');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // --- Options ---

  const getOptions = useCallback(async (questionId) => {
    // Note: Options fetch might need query param
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`${API_ENDPOINTS.QUIZ_OPTIONS}?question_id=${questionId}`);
      if (response.success) {
        return response.data;
      }
      return [];
    } catch (err) {
      setError(err.message || 'Failed to fetch options');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createOption = useCallback(async (questionId, data) => {
    setLoading(true);
    setError(null);
    try {
      // The API seems to take question_id as query param for creation according to Postman? 
      // Or maybe it expects it in the body?
      // Postman says: POST {{dinner}}api/v1/quiz/options/?question_id=...
      // But creating a resource usually implies body. Let's check Postman usage again.
      // Ah, Postman request "Create Quiz Option" has URL params but body also.
      // Usually REST APIs take body for POST. I will assume body or query param. 
      // The previous Postman inspection showed query param `question_id` in URL.
      
      const response = await api.post(`${API_ENDPOINTS.QUIZ_OPTIONS}?question_id=${questionId}`, data);
      if (response.success) {
        return response.data;
      }
      throw new Error(response.message || 'Failed to create option');
    } catch (err) {
      setError(err.message || 'Failed to create option');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateOption = useCallback(async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.patch(API_ENDPOINTS.QUIZ_OPTION_DETAIL(id), data);
      if (response.success) {
        return response.data;
      }
      throw new Error(response.message || 'Failed to update option');
    } catch (err) {
      setError(err.message || 'Failed to update option');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteOption = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.delete(API_ENDPOINTS.QUIZ_OPTION_DETAIL(id));
      if (response.success) {
        return true;
      }
      throw new Error(response.message || 'Failed to delete option');
    } catch (err) {
      setError(err.message || 'Failed to delete option');
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
    getOptions,
    createOption,
    updateOption,
    deleteOption
  };
};

