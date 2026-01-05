/**
 * Quiz Flow Constants
 * Defines the flow states for the onboarding quiz
 */

export const QUIZ_FLOW_STATES = {
  CITY: 'city',
  PLACE: 'place',
  QUIZ: 'quiz',
  IDENTITY: 'identity',
  BIRTHDAY: 'birthday',
  SOCIAL_LOGIN: 'social-login',
  EMAIL: 'email',
  PASSWORD: 'password',
  USER_INFO: 'user-info',
  WELCOME: 'welcome',
  HOW_IT_WORKS: 'how-it-works',
  BOOK_DINNER: 'book-dinner',
};

export const QUIZ_FLOW_ORDER = [
  QUIZ_FLOW_STATES.CITY,
  QUIZ_FLOW_STATES.PLACE,
  QUIZ_FLOW_STATES.QUIZ,
  QUIZ_FLOW_STATES.IDENTITY,
  QUIZ_FLOW_STATES.BIRTHDAY,
  QUIZ_FLOW_STATES.SOCIAL_LOGIN,
  QUIZ_FLOW_STATES.EMAIL,
  QUIZ_FLOW_STATES.PASSWORD,
  QUIZ_FLOW_STATES.USER_INFO,
  QUIZ_FLOW_STATES.WELCOME,
  QUIZ_FLOW_STATES.HOW_IT_WORKS,
  QUIZ_FLOW_STATES.BOOK_DINNER,
];

