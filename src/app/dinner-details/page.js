"use client";

import { useState } from 'react';
import DinnerDetailsPage from '../../../components/pages/DinnerDetailsPage';
import { SubscriptionModal } from '../../../components/modals';
import { useRouter } from 'next/navigation';

export default function DinnerDetails() {
  const router = useRouter();
  const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false);

  const handleManageSubscription = () => {
    setSubscriptionModalOpen(true);
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
    <>
      <DinnerDetailsPage
        onManageSubscription={handleManageSubscription}
        onContactSupport={handleContactSupport}
        onMyAccount={handleMyAccount}
        onRSVP={handleRSVP}
        onCopyAddress={handleCopyAddress}
      />
      <SubscriptionModal
        isOpen={subscriptionModalOpen}
        onClose={() => setSubscriptionModalOpen(false)}
        onContinue={(plan) => setSubscriptionModalOpen(false)}
      />
    </>
  );
}

