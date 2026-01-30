"use client";

import AvailableDinnersPage from '../../../components/pages/AvailableDinnersPage';
import { useRouter } from 'next/navigation';

export default function AvailableDinners() {
  const router = useRouter();

  const handleMyAccount = () => {
    router.push('/account');
  };

  const handleViewDetails = (dinnerId) => {
    router.push(`/dinner-details?id=${dinnerId}`);
  };

  return (
    <AvailableDinnersPage
      onMyAccount={handleMyAccount}
      onViewDetails={handleViewDetails}
    />
  );
}
