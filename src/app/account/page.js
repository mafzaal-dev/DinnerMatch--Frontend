"use client";

import { useState } from 'react';
import AccountPage from '../../../components/pages/AccountPage';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { SubscriptionModal } from '../../../components/modals';

export default function Account() {
  const router = useRouter();
  const { logout, user } = useAuth();
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const handleEditProfile = () => {
    router.push('/edit-profile');
  };

  const handleMyTickets = () => {
    router.push('/your-dinner');
  };

  const handleManageSubscription = () => {
    setShowSubscriptionModal(true);
  };

  const handleHelpCenter = () => {
    router.push('/help-center');
  };

  const handlePrivacyPolicy = () => {
    router.push('/privacy-policy');
  };

  const handleTermsConditions = () => {
    router.push('/terms-conditions');
  };

  const handleLogOut = () => {
    logout();
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <AccountPage
        onEditProfile={handleEditProfile}
        onMyTickets={handleMyTickets}
        onManageSubscription={handleManageSubscription}
        onHelpCenter={handleHelpCenter}
        onPrivacyPolicy={handlePrivacyPolicy}
        onTermsConditions={handleTermsConditions}
        onLogOut={handleLogOut}
        onBack={handleBack}
        user={user}
      />
      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
        onBack={() => setShowSubscriptionModal(false)}
        onContinue={() => setShowSubscriptionModal(false)}
      />
    </>
  );
}

