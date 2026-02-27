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
    <div className="fixed inset-0 bg-[#0F1123] md:bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="min-h-full w-full text-white md:bg-[#0F1123] md:rounded-xl md:p-8 md:max-w-4xl md:mx-4 md:relative md:animate-fadeIn md:max-h-[85vh] md:overflow-y-auto md:min-h-0 flex flex-col p-4 pb-20">
        <button
          onClick={onClose}
          className="absolute top-10 right-10 text-[#D9D9D9] hover:text-[#F5F5F5] transition-colors"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-10 left-10 flex items-center gap-2 text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </button>
        )}

        <div className="mb-10 text-center">
          <h2 className="text-[32px] font-bold text-[#F5F5F5] mb-2">
            DinnerMatch
          </h2>
          <p className="text-[#E0E0E0]">Create your accounts</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg">
            <p className="text-red-400 text-sm text-center">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              {...register("first_name")}
              placeholder="First name *"
              className={`w-full px-4 py-3 bg-[#111121] border rounded-lg text-[#F5F5F5] placeholder-zinc-600 focus:outline-none focus:border-[#FFAA55] transition-colors ${errors.first_name ? "border-red-500" : "border-[#2F3A51]"}`}
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
              className={`w-full px-4 py-3 bg-[#111121] border rounded-lg text-[#F5F5F5] placeholder-zinc-600 focus:outline-none focus:border-[#FFAA55] transition-colors ${errors.last_name ? "border-red-500" : "border-[#2F3A51]"}`}
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
              className={`w-full px-4 py-3 bg-[#111121] border rounded-lg text-[#F5F5F5] placeholder-zinc-600 focus:outline-none focus:border-[#FFAA55] transition-colors ${errors.email ? "border-red-500" : "border-[#2F3A51]"}`}
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
              className={`w-full px-4 py-3 bg-[#111121] border rounded-lg text-[#F5F5F5] placeholder-zinc-600 focus:outline-none focus:border-[#FFAA55] transition-colors ${errors.mobile_number ? "border-red-500" : "border-[#2F3A51]"}`}
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
              className={`w-full px-4 py-3 bg-[#111121] border rounded-lg text-[#F5F5F5] placeholder-zinc-600 focus:outline-none focus:border-[#FFAA55] transition-colors pr-12 ${errors.password ? "border-red-500" : "border-[#2F3A51]"}`}
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
            className={`w-full py-4 rounded-lg font-medium text-sm uppercase tracking-wide transition-colors ${
              loading
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
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
