"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/constants/validationSchemas";

const SignupModal = ({
  isOpen,
  onClose,
  onSignup,
  onBack,
  loading = false,
  error = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  if (!isOpen) return null;

  const onSubmit = (data) => {
    onSignup({
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      password: data.password,
      mobileNumber: data.mobile_number,
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0F1123] md:bg-black/80 md:flex md:items-center md:justify-center">
      <div className="min-h-full w-full text-white md:bg-[#0F1123] md:rounded-xl md:p-8 md:max-w-4xl md:mx-4 md:relative md:animate-fadeIn md:max-h-[85vh] md:overflow-y-auto md:min-h-0 flex flex-col p-4 pb-20">
        <button onClick={onClose} className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-white transition-colors z-10" aria-label="Close quiz">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
            <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
          </svg>
        </button>
        <div className="h-screen overflow-y-auto scroll-smooth flex flex-col md:block p-3 md:p-0">
          <div className='text-center pt-12 pb-4 md:mb-10 md:mt-6 md:pt-0 md:pb-0 relative'>
            <button onClick={onBack} className="absolute top-2 left-0 md:left-4 text-gray-400 hover:text-white z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-5 h-5"><path d="m15 18-6-6 6-6"></path>
              </svg>
              <span className="text-sm">Back</span>
            </button>
            <h1 className="text-2xl md:text-4xl font-bold mb-1">
              <span className="text-white">Dinner</span><span className="text-[#FFAA55]">Match</span>
            </h1>
            <p className='text-lg mb-8 text-center'>
              Let's get you started
            </p>
          </div>
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg">
              <p className="text-red-400 text-sm text-center">{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="space-y-4 max-w-[500px] mx-auto">
              <div>
                <input
                  type="text"
                  {...register("first_name")}
                  placeholder="First name *"
                  className={`w-full bg-[#1A1D35] border-2 border-gray-700 rounded-xl text-white px-4 py-4 pr-10 cursor-pointer transition-all duration-200 ${errors.first_name ? "border-red-500" : "border-[#2F3A51]"}`}
                  disabled={loading}
                />
                {errors.first_name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  {...register("last_name")}
                  placeholder="Last name *"
                  className={`w-full bg-[#1A1D35] border-2 border-gray-700 rounded-xl text-white px-4 py-4 pr-10 cursor-pointer transition-all duration-200 ${errors.first_name ? "border-red-500" : "border-[#2F3A51]"}`}
                  disabled={loading}
                />
                {errors.last_name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email *"
                  className={`w-full bg-[#1A1D35] border-2 border-gray-700 rounded-xl text-white px-4 py-4 pr-10 cursor-pointer transition-all duration-200 ${errors.first_name ? "border-red-500" : "border-[#2F3A51]"}`}
                  disabled={loading}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  {...register("mobile_number")}
                  placeholder="Mobile number *"
                  className={`w-full bg-[#1A1D35] border-2 border-gray-700 rounded-xl text-white px-4 py-4 pr-10 cursor-pointer transition-all duration-200 ${errors.first_name ? "border-red-500" : "border-[#2F3A51]"}`}
                  disabled={loading}
                />
                {errors.mobile_number && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.mobile_number.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="Password *"
                  className={`w-full bg-[#1A1D35] border-2 border-gray-700 rounded-xl text-white px-4 py-4 pr-10 cursor-pointer transition-all duration-200 ${errors.first_name ? "border-red-500" : "border-[#2F3A51]"}`}
                  disabled={loading}
                />
                {errors.password && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
                >
                  {showPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-lg font-medium text-sm uppercase tracking-wide transition-colors ${loading
                  ? "bg-[#2F3A51] text-[#E0E0E0] cursor-not-allowed"
                  : "bg-[#FFAA55] text-white hover:bg-[#FF9955]"
                  }`}
              >
                {loading ? "Creating account..." : "Sign Up"}
              </button>

              <p className="text-xs text-[#A0A0A0] text-center">
                By continuing, you agree to our{" "}
                <a href="/terms-conditions" className="hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default SignupModal;
