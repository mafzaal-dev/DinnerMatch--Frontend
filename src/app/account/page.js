"use client";

import { useState, useEffect, Suspense } from 'react';
import AccountPage from '../../../components/pages/AccountPage';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { SubscriptionModal } from '../../../components/modals';

function AccountContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { logout, user } = useAuth();
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  useEffect(() => {
    if (searchParams.get('openSubscription') === '1') {
      setShowSubscriptionModal(true);
      router.replace('/account', { scroll: false });
    }
  }, [searchParams, router]);

  const handleEditProfile = () => {
    router.push('/edit-profile');
  };

  const handleMyTickets = () => {
    router.push('/your-dinner');
  };

  const handleManageSubscription = () => {
    setShowSubscriptionModal(true);
  };

  const handlePaymentHistory = () => {
    router.push('/payment-history');
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
    router.push('/');
  };

  return (
    <>
      <AccountPage
        onEditProfile={handleEditProfile}
        onMyTickets={handleMyTickets}
        onManageSubscription={handleManageSubscription}
        onPaymentHistory={handlePaymentHistory}
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

export default function Account() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AccountContent />
    </Suspense>
  );
}
