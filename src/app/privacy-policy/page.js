"use client";

import PrivacyPolicyPage from '../../../components/pages/PrivacyPolicyPage';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return <PrivacyPolicyPage onBack={handleBack} />;
}

