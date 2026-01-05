"use client";

import DinnerDetailsPage from '../../../components/pages/DinnerDetailsPage';
import { useRouter } from 'next/navigation';

export default function DinnerDetails() {
  const router = useRouter();

  const handleManageSubscription = () => {
    router.push('/account');
  };

  const handleContactSupport = () => {
    router.push('/help-center');
  };

  const handleMyAccount = () => {
    router.push('/account');
  };

  const handleRSVP = (status) => {
    console.log('RSVP:', status);
    // Handle RSVP logic
  };

  const handleCopyAddress = (address) => {
    console.log('Address copied:', address);
  };

  return (
    <DinnerDetailsPage
      onManageSubscription={handleManageSubscription}
      onContactSupport={handleContactSupport}
      onMyAccount={handleMyAccount}
      onRSVP={handleRSVP}
      onCopyAddress={handleCopyAddress}
    />
  );
}

