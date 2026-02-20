"use client";

import HelpCenterPage from '../../../components/pages/HelpCenterPage';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function HelpCenter() {
  const router = useRouter();

  const handleSubmit = (formData) => {
    // Handle form submission logic here
    console.log('Help request submitted:', formData);
    toast.success("Your message has been sent! We'll get back to you soon.");
  };

  const handleBack = () => {
    router.back();
  };

  return <HelpCenterPage onSubmit={handleSubmit} onBack={handleBack} />;
}

