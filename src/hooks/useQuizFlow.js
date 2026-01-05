"use client";

import { useState, useEffect, useCallback } from 'react';
import { QUIZ_FLOW_STATES } from '@/constants/quizFlow';

/**
 * Custom hook to manage quiz flow state
 * Provides centralized state management for the onboarding quiz flow
 */
export const useQuizFlow = () => {
  const [quizFlow, setQuizFlow] = useState(null);
  const [flowData, setFlowData] = useState({
    selectedCity: null,
    selectedPlace: null,
    personalityAnswers: null,
    identityAnswers: null,
    selectedLoginMethod: null,
    userEmail: null,
    userPassword: null,
    userInfo: null,
  });

  useEffect(() => {
    const handleOpenQuiz = () => {
      setQuizFlow(QUIZ_FLOW_STATES.CITY);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('openQuiz', handleOpenQuiz);
      return () => {
        window.removeEventListener('openQuiz', handleOpenQuiz);
      };
    }
  }, []);

  const updateFlowData = useCallback((updates) => {
    setFlowData((prev) => ({ ...prev, ...updates }));
  }, []);

  const resetFlow = useCallback(() => {
    setQuizFlow(null);
    setFlowData({
      selectedCity: null,
      selectedPlace: null,
      personalityAnswers: null,
      identityAnswers: null,
      selectedLoginMethod: null,
      userEmail: null,
      userPassword: null,
      userInfo: null,
    });
  }, []);

  const goToNext = useCallback((nextState) => {
    setQuizFlow(nextState);
  }, []);

  const goToPrevious = useCallback(() => {
    // Implement logic to go to previous state based on current state
    // This can be enhanced with a state machine
    setQuizFlow((current) => {
      const states = Object.values(QUIZ_FLOW_STATES);
      const currentIndex = states.indexOf(current);
      return currentIndex > 0 ? states[currentIndex - 1] : null;
    });
  }, []);

  return {
    quizFlow,
    flowData,
    setQuizFlow,
    updateFlowData,
    resetFlow,
    goToNext,
    goToPrevious,
  };
};

