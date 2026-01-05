"use client";

import YourDinnerPage from '../../../components/pages/YourDinnerPage';
import { useRouter } from 'next/navigation';

export default function YourDinner() {
  const router = useRouter();

  const handleViewDetails = (dinnerId) => {
    router.push(`/dinner-details?id=${dinnerId}`);
  };

  const handleMyAccount = () => {
    router.push('/account');
  };

  return (
    <YourDinnerPage
      onViewDetails={handleViewDetails}
      onMyAccount={handleMyAccount}
    />
  );
}

