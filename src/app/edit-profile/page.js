"use client";

import EditProfilePage from '../../../components/pages/EditProfilePage';
import { useRouter } from 'next/navigation';

export default function EditProfile() {
  const router = useRouter();

  const handleSave = (formData) => {
    // Handle save profile logic here
    console.log('Profile saved:', formData);
    router.push('/account');
  };

  const handleBack = () => {
    router.back();
  };

  return <EditProfilePage onSave={handleSave} onBack={handleBack} />;
}

