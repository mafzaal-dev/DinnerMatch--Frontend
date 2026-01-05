"use client";

import TermsConditionsPage from '../../../components/pages/TermsConditionsPage';
import { useRouter } from 'next/navigation';

export default function TermsConditions() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return <TermsConditionsPage onBack={handleBack} />;
}

