"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'react-hot-toast';

const PreferencesModal = ({ isOpen, onClose, onConfirm, onBack }) => {
    const { updateProfile } = useAuth();
    const [view, setView] = useState('form'); // 'form' or 'confirm'
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [preferences, setPreferences] = useState({
        language: 'English',
        budget: '$$',
        hasDietaryRestrictions: false,
        dietaryRestrictions: []
    });

    const languages = ['English', 'Afrikaans', 'Xhosa'];
    const budgets = ['$', '$$', '$$$'];
    const dietaryOptions = ['Vegetarian', 'Meat', 'Fish', 'Vegan', 'Halaal'];

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!isOpen) return null;

    const toggleDietaryOption = (option) => {
        setPreferences(prev => ({
            ...prev,
            dietaryRestrictions: prev.dietaryRestrictions.includes(option)
                ? prev.dietaryRestrictions.filter(item => item !== option)
                : [...prev.dietaryRestrictions, option]
        }));
    };

    const handleContinue = () => {
        setView('confirm');
    };

    const handleEdit = () => {
        setView('form');
    };

    const handleFinalConfirm = async () => {
        try {
            setIsSubmitting(true);

            // Map preferences to profile update payload
            const payload = {
                primary_language: preferences.language,
                budget: preferences.budget,
                dietary_restrictions: preferences.dietaryRestrictions.join(', '),
                has_dietary_restrictions: preferences.hasDietaryRestrictions
            };

            await updateProfile(payload);
            toast.success('Preferences saved successfully!');
            onConfirm(preferences);
        } catch (error) {
            console.error('Failed to update preferences:', error);
            toast.error(error.message || 'Failed to update preferences');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-[#0F1123] md:bg-black/80 md:flex md:items-center md:justify-center overflow-y-auto overscroll-none">
            <div className="min-h-full h-full w-full text-white md:bg-[#0F1123] md:rounded-xl md:p-8 md:max-w-4xl md:mx-4 md:relative md:animate-fadeIn md:max-h-[85vh] md:overflow-y-auto md:min-h-0 flex flex-col p-4">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-white transition-colors z-10"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="text-center mb-12 relative w-full">
                    {onBack && (
                        <button
                            onClick={onBack}
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-sm md:block hidden">Back</span>
                        </button>
                    )}
                    <h1 className="text-2xl md:text-4xl font-bold mb-1"><span className="text-white">Dinner</span><span className="text-[#FFAA55]">Match</span></h1>
                </div>

                <div className="max-w-xl mx-auto w-full">
                    {view === 'form' ? (
                        <div className="w-full space-y-8">
                            <div className="text-center mb-6">
                                <h2 className="text-lg md:text-xl font-bold text-[#FFAA55]">Dining Preferences</h2>
                            </div>

                            <div className="space-y-4">
                                <p className="text-base md:text-lg font-medium">What language do you prefer to speak at dinner?</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {languages.map(lang => {
                                        const isSelected = preferences.language === lang;
                                        return (
                                            <button
                                                key={lang}
                                                onClick={() => setPreferences({ ...preferences, language: lang })}
                                                className={`w-full p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${isSelected
                                                    ? 'border-[#FFAA55] bg-[#FFAA55] text-[#111]'
                                                    : 'bg-transparent text-white border-white/20 hover:border-white/40 hover:bg-white/5'
                                                    }`}
                                            >
                                                <span className="font-semibold text-base">{lang}</span>
                                                {isSelected && (
                                                    <svg className="w-4 h-4 text-[#111]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-base md:text-lg font-medium">What are you willing to spend at dinner?</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {budgets.map(b => {
                                        const isSelected = preferences.budget === b;
                                        return (
                                            <button
                                                key={b}
                                                onClick={() => setPreferences({ ...preferences, budget: b })}
                                                className={`w-full p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${isSelected
                                                    ? 'border-[#FFAA55] bg-[#FFAA55] text-[#111]'
                                                    : 'bg-transparent text-white border-white/20 hover:border-white/40 hover:bg-white/5'
                                                    }`}
                                            >
                                                <span className="font-semibold text-lg">{b}</span>
                                                {isSelected && (
                                                    <svg className="w-4 h-4 text-[#111]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <p className="text-base md:text-lg font-medium">I have dietary restrictions</p>
                                    <button
                                        onClick={() => setPreferences({ ...preferences, hasDietaryRestrictions: !preferences.hasDietaryRestrictions })}
                                        className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${preferences.hasDietaryRestrictions ? 'bg-[#FFAA55]' : 'bg-[#2F3A51]'}`}
                                    >
                                        <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 ${preferences.hasDietaryRestrictions ? 'left-6.5' : 'left-0.5'}`} />
                                    </button>
                                </div>

                                {preferences.hasDietaryRestrictions && (
                                    <div className="grid grid-cols-2 gap-2 animate-fadeIn">
                                        {dietaryOptions.map(option => {
                                            const isSelected = preferences.dietaryRestrictions.includes(option);
                                            return (
                                                <button
                                                    key={option}
                                                    onClick={() => toggleDietaryOption(option)}
                                                    className={`w-full p-2 rounded-lg border text-sm transition-all duration-300 ${isSelected
                                                        ? 'border-[#FFAA55] bg-[#FFAA55] text-[#111]'
                                                        : 'bg-transparent text-white border-white/20 hover:border-white/40 hover:bg-white/5'
                                                        }`}
                                                >
                                                    {option}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleContinue}
                                className="w-full bg-[#FFAA55] text-white py-3 px-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#FF9955] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,170,85,0.4)] mt-4"
                            >
                                Continue
                            </button>
                        </div>
                    ) : (
                        <div className="w-full space-y-8">
                            <div className="text-center mb-6">
                                <h2 className="text-lg md:text-xl font-bold text-[#FFAA55] uppercase tracking-widest">Confirm Your Preferences</h2>
                            </div>

                            <div className="w-full border border-[#2F3A51] rounded-2xl p-6 shadow-2xl space-y-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-[#FFAA55] text-xs uppercase tracking-widest font-bold">Budget</p>
                                    <p className="text-lg font-medium">{preferences.budget}</p>
                                </div>
                                <div className="h-px bg-[#2F3A51]" />
                                <div className="flex justify-between items-center">
                                    <p className="text-[#FFAA55] text-xs uppercase tracking-widest font-bold">Restrictions</p>
                                    <p className="text-lg font-medium">
                                        {preferences.hasDietaryRestrictions
                                            ? preferences.dietaryRestrictions.join(', ') || 'None'
                                            : 'None'}
                                    </p>
                                </div>
                                <div className="h-px bg-[#2F3A51]" />
                                <div className="flex justify-between items-center">
                                    <p className="text-[#FFAA55] text-xs uppercase tracking-widest font-bold">Language</p>
                                    <p className="text-lg font-medium">{preferences.language}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={handleFinalConfirm}
                                    className="w-full bg-[#FFAA55] text-white py-3 px-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#FF9955] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,170,85,0.4)]"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Saving...' : 'Confirm'}
                                </button>
                                <button
                                    onClick={handleEdit}
                                    className="w-full text-[#E0E0E0] font-semibold text-sm hover:text-white transition-all"
                                    disabled={isSubmitting}
                                >
                                    Edit my preferences
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PreferencesModal;
