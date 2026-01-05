"use client";

import PreferencesPage from '../../../components/pages/PreferencesPage';
import { useRouter } from 'next/navigation';

export default function Preferences() {
  const router = useRouter();

  const handleSave = (preferences) => {
    // Handle save preferences logic here
    console.log('Preferences saved:', preferences);
    router.push('/account');
  };

  const handleBack = () => {
    router.back();
  };

  return <PreferencesPage onSave={handleSave} onBack={handleBack} />;
}

