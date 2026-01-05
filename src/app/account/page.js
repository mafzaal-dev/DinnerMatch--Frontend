"use client";

import AccountPage from '../../../components/pages/AccountPage';
import { useRouter } from 'next/navigation';

export default function Account() {
  const router = useRouter();

  const handleEditProfile = () => {
    router.push('/edit-profile');
  };

  const handleMyTickets = () => {
    router.push('/your-dinner');
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
    // Handle logout logic
    console.log('Logout');
    router.push('/');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <AccountPage
      onEditProfile={handleEditProfile}
      onMyTickets={handleMyTickets}
      onHelpCenter={handleHelpCenter}
      onPrivacyPolicy={handlePrivacyPolicy}
      onTermsConditions={handleTermsConditions}
      onLogOut={handleLogOut}
      onBack={handleBack}
    />
  );
}

