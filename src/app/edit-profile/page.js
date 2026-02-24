"use client";

import EditProfilePage from "../../../components/pages/EditProfilePage";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { api, API_ENDPOINTS } from "@/utils/api";

export default function EditProfile() {
  const router = useRouter();
  const { user, updateProfile, getProfile } = useAuth();
  const [initialData, setInitialData] = useState({});
  const [profileApiResponse, setProfileApiResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const storedUser =
          typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("user_data") || "{}")
            : {};

        try {
          const fullResponse = await api.get(API_ENDPOINTS.USER_PROFILE);
          if (fullResponse?.success && fullResponse?.data) {
            setProfileApiResponse(fullResponse);
            setInitialData({
              ...storedUser,
              ...user,
              ...fullResponse.data,
            });
          } else if (user || Object.keys(storedUser).length > 0) {
            setInitialData({ ...storedUser, ...user });
          }

          if (
            !fullResponse?.success &&
            (user || Object.keys(storedUser).length > 0)
          ) {
            setInitialData({ ...storedUser, ...user });
          }
        } catch (profileError) {
          if (user || Object.keys(storedUser).length > 0) {
            setInitialData({ ...storedUser, ...user });
          }
        }
      } catch (error) {
        console.error("Failed to load profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const handleSave = async (formData) => {
    try {
      await updateProfile(formData);
      toast.success(
        "Profile updated successfully! You can now request for dinners.",
      );

      if (typeof window !== "undefined") {
        const showBookDinner = localStorage.getItem("show_book_dinner");

        if (showBookDinner === "true") {
          localStorage.removeItem("show_book_dinner");
          router.push("/");
        }
      }
    } catch (error) {
      console.error("Failed to update profile", error);
      toast.error(error.message || "Failed to update profile");
    }
  };

  const handleBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080714] flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFAA55]" />
      </div>
    );
  }

  return (
    <EditProfilePage
      onSave={handleSave}
      onBack={handleBack}
      initialData={initialData}
      profileApiResponse={profileApiResponse}
    />
  );
}
