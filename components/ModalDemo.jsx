"use client";

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  LoginModal,
  PreferencesForm,
  DinnerConfirmation,
  PricingModal,
  CitySelectionModal,
  AreaSelectionModal,
  QuizFlow,
} from './modals';

/**
 * Demo component showing how to use all modals
 * This demonstrates the user flow through the application
 */
const ModalDemo = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [areaOpen, setAreaOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [preferences, setPreferences] = useState(null);

  const handlePreferencesContinue = (prefs) => {
    setPreferences(prefs);
    setPreferencesOpen(false);
    setConfirmationOpen(true);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setCityOpen(false);
    setAreaOpen(true);
  };

  const handleAreaSelect = (area) => {
    if (area) {
      setSelectedArea(area);
    }
    setAreaOpen(false);
    setQuizOpen(true);
  };

  const handleQuizComplete = (answers) => {
    console.log('Quiz answers:', answers);
    setQuizOpen(false);
    setPricingOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Modal Components Demo</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setLoginOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Open Login Modal
          </button>

          <button
            onClick={() => setPreferencesOpen(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Open Preferences Form
          </button>

          <button
            onClick={() => setConfirmationOpen(true)}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Open Dinner Confirmation
          </button>

          <button
            onClick={() => setPricingOpen(true)}
            className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Open Pricing Modal
          </button>

          <button
            onClick={() => setCityOpen(true)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Open City Selection
          </button>

          <button
            onClick={() => setAreaOpen(true)}
            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
          >
            Open Area Selection
          </button>

          <button
            onClick={() => setQuizOpen(true)}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Open Quiz Flow
          </button>

          <button
            onClick={() => {
              setCityOpen(true);
            }}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Start Full Flow (City → Area → Quiz → Pricing)
          </button>
        </div>

        {/* Display current state */}
        <div className="mt-8 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-white mb-4">Current State</h2>
          <pre className="text-gray-300 text-sm overflow-auto">
            {JSON.stringify(
              {
                selectedCity,
                selectedArea,
                preferences,
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>

      {/* Modals */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />

      {preferencesOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <PreferencesForm
            onContinue={handlePreferencesContinue}
            onBack={() => setPreferencesOpen(false)}
          />
        </div>
      )}

      {confirmationOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <DinnerConfirmation
            preferences={preferences}
            onEdit={() => {
              setConfirmationOpen(false);
              setPreferencesOpen(true);
            }}
            onConfirm={() => {
              setConfirmationOpen(false);
              toast.success('Preferences confirmed!');
            }}
          />
        </div>
      )}

      <PricingModal
        isOpen={pricingOpen}
        onClose={() => setPricingOpen(false)}
        onSelectPlan={(planId) => {
          console.log('Selected plan:', planId);
          setPricingOpen(false);
          toast.success(`Selected plan: ${planId}`);
        }}
      />

      <CitySelectionModal
        isOpen={cityOpen}
        onClose={() => setCityOpen(false)}
        onSelectCity={handleCitySelect}
      />

      <AreaSelectionModal
        isOpen={areaOpen}
        onClose={() => setAreaOpen(false)}
        onSelectArea={handleAreaSelect}
        city={selectedCity?.name || 'Cape Town'}
      />

      <QuizFlow
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onComplete={handleQuizComplete}
      />
    </div>
  );
};

export default ModalDemo;

