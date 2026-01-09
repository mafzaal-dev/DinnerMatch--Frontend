"use client";

import EditProfilePage from '../../../components/pages/EditProfilePage';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function EditProfile() {
  const router = useRouter();
  const { user, updateProfile, getProfile } = useAuth();
  const [initialData, setInitialData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
        try {
            // First use user data from context if available as a base
            // But we should fetch fresh profile data to be sure
            const profileData = await getProfile();
            if (profileData) {
                setInitialData({
                    ...user, // Basic info like email/name from auth
                    ...profileData // Profile specific info
                });
            } else if (user) {
                 setInitialData(user);
            }
        } catch (error) {
            console.error('Failed to fetch profile', error);
            toast.error('Failed to load profile data');
        } finally {
            setLoading(false);
        }
    };

    fetchProfile();
  }, [user, getProfile]);


  const handleSave = async (formData) => {
    try {
        await updateProfile(formData);
        toast.success('Profile updated successfully');
        router.push('/account');
    } catch (error) {
        console.error('Failed to update profile', error);
        toast.error(error.message || 'Failed to update profile');
    }
  };

  const handleBack = () => {
    router.back();
  };

  if (loading) {
      return (
          <div className="min-h-screen bg-[#080814] flex items-center justify-center">
             <div className="text-white">Loading...</div>
          </div>
      );
  }

  return <EditProfilePage onSave={handleSave} onBack={handleBack} initialData={initialData} />;
}

