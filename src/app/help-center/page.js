"use client";

import HelpCenterPage from '../../../components/pages/HelpCenterPage';
import { useRouter } from 'next/navigation';

export default function HelpCenter() {
  const router = useRouter();

  const handleSubmit = (formData) => {
    // Handle form submission logic here
    console.log('Help request submitted:', formData);
    // Show success message or redirect
    alert('Your message has been sent! We\'ll get back to you soon.');
  };

  const handleBack = () => {
    router.back();
  };

  return <HelpCenterPage onSubmit={handleSubmit} onBack={handleBack} />;
}

