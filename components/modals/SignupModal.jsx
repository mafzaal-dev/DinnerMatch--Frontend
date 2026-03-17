"use client";

import React, { useState, useEffect } from "react";
import { api, API_ENDPOINTS } from "@/utils/api";

const INPUT_CLASS =
  "flex h-10 w-full border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#1E1E2E] border-[#333] text-white py-6 px-4 rounded-lg focus:border-[#FFAA55] focus:ring-[#FFAA55] transition-all";

const EyeOpen = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeClosed = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);

const SignupModal = ({
  isOpen,
  onClose,
  onSignup,
  onBack,
  onShowLogin,
  loading = false,
  error = "",
}) => {
  const [step, setStep] = useState(1);

  // Step 1 — email
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  // Step 2 — password
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Step 3 — profile
  const [fullName, setFullName] = useState("");
  const [phoneDisplay, setPhoneDisplay] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [stepErrors, setStepErrors] = useState({});

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset everything when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setEmail(""); setConfirmEmail("");
      setPassword(""); setConfirmPassword("");
      setFullName(""); setPhoneDisplay(""); setMobileNumber("");
      setStepErrors({});
      setShowPassword(false); setShowConfirmPassword(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setStepErrors({});
    } else {
      onBack?.();
    }
  };

  // Phone formatting
  const formatSAPhone = (input) => {
    const hasPlus = input.startsWith("+");
    const digits = input.replace(/\D/g, "");
    if (hasPlus || digits.startsWith("27")) {
      const local = digits.startsWith("27") ? digits.slice(2) : digits;
      if (local.length === 0) return "+27";
      if (local.length <= 2) return `+27 ${local}`;
      if (local.length <= 5) return `+27 ${local.slice(0, 2)} ${local.slice(2)}`;
      return `+27 ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5, 9)}`;
    }
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatSAPhone(e.target.value);
    setPhoneDisplay(formatted);
    setMobileNumber(formatted);
  };

  // Validations
  const validateStep1 = () => {
    const errs = {};
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email address";
    if (!confirmEmail) errs.confirmEmail = "Please confirm your email";
    else if (email !== confirmEmail) errs.confirmEmail = "Emails do not match";
    setStepErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!password) errs.password = "Password is required";
    else if (password.length < 8) errs.password = "Password must be at least 8 characters";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password))
      errs.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    if (!confirmPassword) errs.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword) errs.confirmPassword = "Passwords do not match";
    setStepErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs = {};
    if (!fullName.trim()) errs.fullName = "Full name is required";
    setStepErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleStep1Continue = async (e) => {
    e.preventDefault();
    if (!validateStep1()) return;

    try {
      const response = await api.post(API_ENDPOINTS.PROFILE_CHECK, { email });

      if (response?.success && response.code === "DMU-001-245") {
        setStepErrors({
          email: "This email is already registered. Please sign in instead.",
        });
        return;
      }

      setStepErrors({});
      setStep(2);
    } catch (err) {
      if (err?.status === 404 || err?.data?.code === "DMU-001-244") {
        setStepErrors({});
        setStep(2);
      } else {
        setStepErrors({
          email: "We could not verify this email right now. Please try again.",
        });
      }
    }
  };

  const handleStep2Continue = (e) => {
    e.preventDefault();
    if (validateStep2()) { setStepErrors({}); setStep(3); }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep3()) return;
    const parts = fullName.trim().split(/\s+/);
    const firstName = parts[0];
    const lastName = parts.length > 1 ? parts.slice(1).join(" ") : parts[0];
    onSignup({ firstName, lastName, email, password, mobileNumber });
  };

  const STEP_TITLES = { 2: "Create your password", 3: "Tell us about yourself" };

  return (
    <div className="fixed inset-0 z-50 bg-[#0F1123] md:bg-black/80 md:flex md:items-center md:justify-center">
      <div className="min-h-full w-full text-white md:bg-[#0F1123] md:rounded-xl md:p-8 md:max-w-4xl md:mx-4 md:relative md:animate-fadeIn md:max-h-[85vh] md:overflow-y-auto md:min-h-0 flex flex-col p-4 pb-20">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="h-screen overflow-y-auto scroll-smooth flex flex-col md:block p-3 md:p-0">
          {/* Header */}
          <div className="text-center pt-12 pb-4 md:mb-10 md:mt-6 md:pt-0 md:pb-0 relative">
            <button
              onClick={handleBack}
              className="absolute top-2 left-0 md:left-4 text-gray-400 hover:text-white z-10 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="text-sm">Back</span>
            </button>
            <h1 className="text-2xl md:text-4xl font-bold mb-1">
              <span className="text-white">Dinner</span><span className="text-[#FFAA55]">Match</span>
            </h1>
          </div>

          {/* API-level error (returned after submit) */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg max-w-[500px] mx-auto w-full">
              <p className="text-red-400 text-sm text-center">{error}</p>
            </div>
          )}

          {/* Step content */}
          <div className="max-w-[500px] mx-auto w-full">
            {/* Steps 2 & 3 show a title */}
            {step > 1 && (
              <h2 className="text-2xl font-bold text-center mb-8">{STEP_TITLES[step]}</h2>
            )}

            {/* ── Step 1: Email ── */}
            {step === 1 && (
              <form onSubmit={handleStep1Continue} className="space-y-4" noValidate>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`${INPUT_CLASS} ${stepErrors.email ? "border-red-500" : ""}`}
                    disabled={loading}
                    autoFocus
                  />
                  {stepErrors.email && (
                    <p className="text-red-400 text-xs mt-1">{stepErrors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    placeholder="Confirm your email"
                    className={`${INPUT_CLASS} ${stepErrors.confirmEmail ? "border-red-500" : ""}`}
                    disabled={loading}
                  />
                  {stepErrors.confirmEmail && (
                    <p className="text-red-400 text-xs mt-1">{stepErrors.confirmEmail}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-lg font-medium text-sm uppercase tracking-wide bg-[#FFAA55] text-white hover:bg-[#FF9955] transition-colors"
                >
                  Continue
                </button>

                <div className="flex flex-col items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={onBack}
                    className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
                  >
                    Back to options
                  </button>
                  <button
                    type="button"
                    onClick={onShowLogin ?? onClose}
                    className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
                  >
                    Already have an account?{" "}
                    <span className="text-[#FFAA55]">Sign in</span>
                  </button>
                </div>
              </form>
            )}

            {/* ── Step 2: Password ── */}
            {step === 2 && (
              <form onSubmit={handleStep2Continue} className="space-y-4" noValidate>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create password"
                    className={`${INPUT_CLASS} ${stepErrors.password ? "border-red-500" : ""}`}
                    disabled={loading}
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
                  >
                    {showPassword ? <EyeClosed /> : <EyeOpen />}
                  </button>
                  {stepErrors.password && (
                    <p className="text-red-400 text-xs mt-1">{stepErrors.password}</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                    className={`${INPUT_CLASS} ${stepErrors.confirmPassword ? "border-red-500" : ""}`}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
                  >
                    {showConfirmPassword ? <EyeClosed /> : <EyeOpen />}
                  </button>
                  {stepErrors.confirmPassword && (
                    <p className="text-red-400 text-xs mt-1">{stepErrors.confirmPassword}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-lg font-medium text-sm uppercase tracking-wide bg-[#FFAA55] text-white hover:bg-[#FF9955] transition-colors"
                >
                  Continue
                </button>
              </form>
            )}

            {/* ── Step 3: Profile ── */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
                    className={`${INPUT_CLASS} ${stepErrors.fullName ? "border-red-500" : ""}`}
                    disabled={loading}
                    autoFocus
                  />
                  {stepErrors.fullName && (
                    <p className="text-red-400 text-xs mt-1">{stepErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    value={phoneDisplay}
                    onChange={handlePhoneChange}
                    placeholder="Mobile number"
                    maxLength={17}
                    className={`${INPUT_CLASS} ${stepErrors.mobileNumber ? "border-red-500" : ""}`}
                    disabled={loading}
                  />
                  {stepErrors.mobileNumber && (
                    <p className="text-red-400 text-xs mt-1">{stepErrors.mobileNumber}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-lg font-medium text-sm uppercase tracking-wide transition-colors ${
                    loading
                      ? "bg-[#2F3A51] text-[#E0E0E0] cursor-not-allowed"
                      : "bg-[#FFAA55] text-white hover:bg-[#FF9955]"
                  }`}
                >
                  {loading ? "Creating account..." : "Create Account"}
                </button>

                <p className="text-xs text-[#A0A0A0] text-center pt-1">
                  By continuing, you agree to our{" "}
                  <a href="/terms-conditions" className="hover:underline">Terms of Service</a>{" "}
                  and{" "}
                  <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
