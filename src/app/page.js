"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import HowItWorks from "../../components/HowItWorks";
import AboutUs from "../../components/AboutUs";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import { 
  PersonalityQuiz, 
  CitySelectionModal, 
  AreaSelectionModal, 
  IdentityQuiz, 
  BirthdayPicker,
  SocialLoginModal,
  EmailConfirmationModal,
  PasswordCreationModal,
  UserInfoModal,
  WelcomeModal,
  HowItWorksModal,
  BookDinnerModal
} from "../../components/modals";

export default function Home() {
  const [quizFlow, setQuizFlow] = useState(null); // null, 'city', 'place', 'quiz', 'identity', 'birthday', 'social-login', 'email', 'password', 'user-info', 'welcome', 'how-it-works', 'book-dinner'
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [personalityAnswers, setPersonalityAnswers] = useState(null);
  const [identityAnswers, setIdentityAnswers] = useState(null);
  const [selectedLoginMethod, setSelectedLoginMethod] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const handleOpenQuiz = () => {
      setQuizFlow('city');
    };

    window.addEventListener('openQuiz', handleOpenQuiz);
    
    return () => {
      window.removeEventListener('openQuiz', handleOpenQuiz);
    };
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setQuizFlow('place');
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setQuizFlow('quiz');
  };

  const handlePersonalityQuizComplete = (answers) => {
    setPersonalityAnswers(answers);
    // After compatibility score, show identity quiz
    setQuizFlow('identity');
  };

  const handleIdentityQuizComplete = (answers) => {
    setIdentityAnswers(answers);
    // After identity quiz, show birthday picker
    setQuizFlow('birthday');
  };

  const handleBirthdayConfirm = (birthday) => {
    // After birthday, show social login
    setQuizFlow('social-login');
  };

  const handleSocialLoginSelect = (method) => {
    setSelectedLoginMethod(method);
    if (method === 'email') {
      setQuizFlow('email');
    } else {
      // For Apple/Google, skip to user info
      setQuizFlow('user-info');
    }
  };

  const handleEmailConfirm = (email) => {
    setUserEmail(email);
    setQuizFlow('password');
  };

  const handlePasswordCreate = (password) => {
    setUserPassword(password);
    setQuizFlow('user-info');
  };

  const handleUserInfoSubmit = (info) => {
    setUserInfo(info);
    setQuizFlow('welcome');
  };

  const handleWelcomeNext = () => {
    setQuizFlow('how-it-works');
  };

  const handleHowItWorksNext = () => {
    setQuizFlow('book-dinner');
  };

  const handleSecureSpot = (slotId) => {
    console.log('Complete flow data:', {
      city: selectedCity,
      place: selectedPlace,
      personalityAnswers,
      identityAnswers,
      loginMethod: selectedLoginMethod,
      email: userEmail,
      password: userPassword,
      userInfo,
      selectedSlot: slotId,
    });
    // Complete the entire flow
    setQuizFlow(null);
    setSelectedCity(null);
    setSelectedPlace(null);
    setPersonalityAnswers(null);
    setIdentityAnswers(null);
    setSelectedLoginMethod(null);
    setUserEmail(null);
    setUserPassword(null);
    setUserInfo(null);
  };

  const handleClose = () => {
    setQuizFlow(null);
    setSelectedCity(null);
    setSelectedPlace(null);
    setPersonalityAnswers(null);
    setIdentityAnswers(null);
    setSelectedLoginMethod(null);
    setUserEmail(null);
    setUserPassword(null);
    setUserInfo(null);
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
      
      {/* City Selection Modal */}
      <CitySelectionModal
        isOpen={quizFlow === 'city'}
        onClose={handleClose}
        onSelectCity={handleCitySelect}
      />
      
      {/* Place Selection Modal */}
      <AreaSelectionModal
        isOpen={quizFlow === 'place'}
        onClose={() => setQuizFlow('city')}
        onSelectArea={handlePlaceSelect}
        city={selectedCity?.name}
        selectedCityId={selectedCity?.id}
      />
      
      {/* Personality Quiz */}
      <PersonalityQuiz
        isOpen={quizFlow === 'quiz'}
        onClose={handleClose}
        onBack={() => setQuizFlow('place')}
        onComplete={handlePersonalityQuizComplete}
      />
      
      {/* Identity Quiz */}
      <IdentityQuiz
        isOpen={quizFlow === 'identity'}
        onClose={handleClose}
        onBack={() => setQuizFlow('quiz')}
        onComplete={handleIdentityQuizComplete}
      />
      
      {/* Birthday Picker */}
      <BirthdayPicker
        isOpen={quizFlow === 'birthday'}
        onClose={handleClose}
        onBack={() => setQuizFlow('identity')}
        onConfirm={handleBirthdayConfirm}
      />
      
      {/* Social Login Modal */}
      <SocialLoginModal
        isOpen={quizFlow === 'social-login'}
        onClose={handleClose}
        onSelectMethod={handleSocialLoginSelect}
        onBackToOptions={() => setQuizFlow('birthday')}
        onSignIn={() => setQuizFlow('social-login')}
      />
      
      {/* Email Confirmation Modal */}
      <EmailConfirmationModal
        isOpen={quizFlow === 'email'}
        onClose={handleClose}
        onBack={() => setQuizFlow('social-login')}
        onContinue={handleEmailConfirm}
      />
      
      {/* Password Creation Modal */}
      <PasswordCreationModal
        isOpen={quizFlow === 'password'}
        onClose={handleClose}
        onBack={() => setQuizFlow('email')}
        onContinue={handlePasswordCreate}
      />
      
      {/* User Info Modal */}
      <UserInfoModal
        isOpen={quizFlow === 'user-info'}
        onClose={handleClose}
        onBack={() => {
          if (selectedLoginMethod === 'email') {
            setQuizFlow('password');
          } else {
            setQuizFlow('social-login');
          }
        }}
        onContinue={handleUserInfoSubmit}
      />
      
      {/* Welcome Modal */}
      <WelcomeModal
        isOpen={quizFlow === 'welcome'}
        onClose={handleClose}
        onBack={() => setQuizFlow('user-info')}
        onNext={handleWelcomeNext}
      />
      
      {/* How It Works Modal */}
      <HowItWorksModal
        isOpen={quizFlow === 'how-it-works'}
        onClose={handleClose}
        onBack={() => setQuizFlow('welcome')}
        onNext={handleHowItWorksNext}
      />
      
      {/* Book Dinner Modal */}
      <BookDinnerModal
        isOpen={quizFlow === 'book-dinner'}
        onClose={handleClose}
        onBack={() => setQuizFlow('how-it-works')}
        onSecureSpot={handleSecureSpot}
      />
    </main>
  );
}
