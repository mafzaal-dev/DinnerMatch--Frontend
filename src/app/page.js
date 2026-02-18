"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import HowItWorks from "../../components/HowItWorks";
import AboutUs from "../../components/AboutUs";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import { 
  CitySelectionModal, 
  AreaSelectionModal, 
  QuizFlow,
  QuizResultsModal,
  DemographicsFlow,
  SignupModal,
  SubscriptionModal,
  WelcomeModal,
  BookDinnerModal
} from "../../components/modals";
import { api, API_ENDPOINTS } from '../utils/api';

export default function Home() {
  const router = useRouter();
  const [quizStep, setQuizStep] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState(null);
  const [demographics, setDemographics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleOpenQuiz = () => {
      setQuizStep('city');
    };

    window.addEventListener('openQuiz', handleOpenQuiz);
    
    if (typeof window !== 'undefined') {
      const showBookDinner = localStorage.getItem('show_book_dinner');
      if (showBookDinner === 'true') {
        const city = JSON.parse(localStorage.getItem('quiz_city') || 'null');
        const place = JSON.parse(localStorage.getItem('quiz_place') || 'null');
        
        if (city && place) {
          setSelectedCity(city);
          setSelectedPlace(place);
          setQuizStep('book-dinner');
        }
        
        localStorage.removeItem('show_book_dinner');
        localStorage.removeItem('quiz_answers');
      }
    }
    
    return () => {
      window.removeEventListener('openQuiz', handleOpenQuiz);
    };
  }, []);

  const resetQuizFlow = () => {
    setQuizStep(null);
    setSelectedCity(null);
    setSelectedPlace(null);
    setQuizAnswers(null);
    setDemographics(null);
    setError('');
    
    if (typeof window !== 'undefined') {
      localStorage.removeItem('quiz_answers');
      localStorage.removeItem('quiz_city');
      localStorage.removeItem('quiz_place');
      localStorage.removeItem('quiz_demographics');
    }
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    if (typeof window !== 'undefined') {
      localStorage.setItem('quiz_city', JSON.stringify(city));
    }
    setQuizStep('place');
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    if (typeof window !== 'undefined') {
      localStorage.setItem('quiz_place', JSON.stringify(place));
    }
    setQuizStep('quiz');
  };

  const handleQuizComplete = (answers) => {
    const validAnswers = Array.isArray(answers) ? answers.filter(a => a && a.question_id) : [];
    setQuizAnswers(validAnswers);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('quiz_answers', JSON.stringify(validAnswers));
    }
    
    setQuizStep('results');
  };

  const handleResultsContinue = () => {
    const accessToken = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
    
    if (accessToken) {
      setQuizStep('book-dinner');
    } else {
      setQuizStep('demographics');
    }
  };

  const handleDemographicsComplete = (data) => {
    setDemographics(data);
    if (typeof window !== 'undefined') {
      localStorage.setItem('quiz_demographics', JSON.stringify(data));
    }
    setQuizStep('signup');
  };

  const handleSignup = async (formData) => {
    try {
      setLoading(true);
      setError('');

      let answersArray = Array.isArray(quizAnswers) ? quizAnswers.filter(a => a && a.question_id) : [];
      if (answersArray.length === 0 && typeof window !== 'undefined') {
        const storedAnswers = JSON.parse(localStorage.getItem('quiz_answers') || '[]');
        if (Array.isArray(storedAnswers)) {
          answersArray = storedAnswers.filter(a => a && a.question_id);
        }
      }

      let demographicsData = demographics;
      if (!demographicsData && typeof window !== 'undefined') {
        demographicsData = JSON.parse(localStorage.getItem('quiz_demographics') || '{}');
      }

      const registrationData = {
        email: formData.email,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName || '',
        answers: answersArray,
        ...demographicsData,
        city_id: selectedCity?.id,
        area_id: selectedPlace?.id
      };
      
      if (formData.mobileNumber) {
        registrationData.phone_number = formData.mobileNumber;
      }

      const response = await api.post(API_ENDPOINTS.REGISTER_WITH_QUIZ, registrationData);

      if (response.success) {
        const accessToken = response.data?.access || response.data?.tokens?.access || response.access;
        const refreshToken = response.data?.refresh || response.data?.tokens?.refresh || response.refresh;
        
        if (!accessToken || !refreshToken) {
          try {
            const loginResponse = await api.post(API_ENDPOINTS.LOGIN, {
              email: formData.email,
              password: formData.password
            });
            
            if (loginResponse.success && loginResponse.data) {
              const loginAccessToken = loginResponse.data.access;
              const loginRefreshToken = loginResponse.data.refresh;
              
              if (loginAccessToken) localStorage.setItem('access_token', loginAccessToken);
              if (loginRefreshToken) localStorage.setItem('refresh_token', loginRefreshToken);
              
              if (loginResponse.data) {
                localStorage.setItem('user_data', JSON.stringify(loginResponse.data));
              }
            }
          } catch (loginError) {
            console.error('Login after registration failed:', loginError);
            throw new Error('Registration succeeded but auto-login failed. Please try logging in manually.');
          }
        } else {
          localStorage.setItem('access_token', accessToken);
          localStorage.setItem('refresh_token', refreshToken);
          
          if (response.data?.user || response.data) {
            const userData = response.data.user || {
              id: response.data.id,
              email: formData.email,
              first_name: formData.firstName,
              last_name: formData.lastName,
              full_name: `${formData.firstName} ${formData.lastName}`,
            };
            localStorage.setItem('user_data', JSON.stringify(userData));
          }
        }
        
        localStorage.removeItem('quiz_answers');
        localStorage.removeItem('quiz_demographics');

        setQuizStep('welcome');
      }
    } catch (err) {
      console.error('Registration error:', err);
      const errorMessage = err.data?.message || err.message || 'Registration failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSubscriptionContinue = (plan) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('show_book_dinner', 'true');
    }
    router.push('/subscriptions');
  };

  const handleWelcomeNext = () => {
    setQuizStep('subscription');
  };

  const handleBookDinnerSuccess = (data) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('quiz_city');
      localStorage.removeItem('quiz_place');
      localStorage.removeItem('quiz_answers');
      localStorage.removeItem('quiz_demographics');
    }
    resetQuizFlow();
    router.push('/your-dinner');
  };

  return (
    <main>
      <Navbar />
      <Hero />
      <Testimonials />
      <HowItWorks />
      <AboutUs />
      <FAQ />
      <Footer />
      
      <CitySelectionModal
        isOpen={quizStep === 'city'}
        onClose={resetQuizFlow}
        onSelectCity={handleCitySelect}
      />
      
      <AreaSelectionModal
        isOpen={quizStep === 'place'}
        onClose={() => setQuizStep('city')}
        onSelectArea={handlePlaceSelect}
        city={selectedCity?.name}
        selectedCityId={selectedCity?.id}
      />
      
      <QuizFlow
        isOpen={quizStep === 'quiz'}
        onClose={resetQuizFlow}
        onBack={() => setQuizStep('place')}
        onComplete={handleQuizComplete}
      />
      
      <QuizResultsModal
        isOpen={quizStep === 'results'}
        onClose={resetQuizFlow}
        onContinue={handleResultsContinue}
        compatibilityScore={90}
      />
      
      <DemographicsFlow
        isOpen={quizStep === 'demographics'}
        onClose={resetQuizFlow}
        onComplete={handleDemographicsComplete}
      />

      <SignupModal
        isOpen={quizStep === 'signup'}
        onClose={resetQuizFlow}
        onBack={() => setQuizStep('demographics')}
        onSignup={handleSignup}
        loading={loading}
        error={error}
      />

      <SubscriptionModal
        isOpen={quizStep === 'subscription'}
        onClose={() => setQuizStep('book-dinner')}
        onBack={() => setQuizStep('welcome')}
        onContinue={handleSubscriptionContinue}
      />
      
      <WelcomeModal
        isOpen={quizStep === 'welcome'}
        onClose={resetQuizFlow}
        onNext={handleWelcomeNext}
      />
      
      <BookDinnerModal
        isOpen={quizStep === 'book-dinner'}
        onClose={resetQuizFlow}
        onSuccess={handleBookDinnerSuccess}
        selectedCity={selectedCity}
        selectedPlace={selectedPlace}
      />

      {loading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#080814] rounded-xl w-full max-w-154 p-10">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFAA55]"></div>
              <p className="text-[#F5F5F5] text-lg">Creating your account...</p>
              <p className="text-[#E0E0E0] text-sm">Please wait while we set everything up</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
