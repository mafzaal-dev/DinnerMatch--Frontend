"use client";

import { useEffect, Suspense } from 'react';
import AccountPage from '../../../components/pages/AccountPage';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

function AccountContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { logout, user } = useAuth();

  useEffect(() => {
    if (searchParams.get('openSubscription') === '1') {
      router.push('/manage-subscription');
    }
  }, [searchParams, router]);

  const handleEditProfile = () => {
    router.push('/edit-profile');
  };

  const handleMyTickets = () => {
    router.push('/your-dinner');
  };

  const handleManageSubscription = () => {
    router.push('/manage-subscription');
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
    router.push('/dinner-details');
  };

  return (
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
  );
}

export default function Account() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AccountContent />
    </Suspense>
  );
}
