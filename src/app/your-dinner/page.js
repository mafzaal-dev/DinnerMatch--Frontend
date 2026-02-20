"use client";

import YourDinnerPage from '../../../components/pages/YourDinnerPage';
import { useRouter } from 'next/navigation';
import { useRequestedDinners } from '../../hooks/useDinners';

export default function YourDinner() {
  const router = useRouter();
  const { data: dinners = [], isLoading, error } = useRequestedDinners();

  // Map the API data to the format expected by the component
  const mappedDinners = dinners.map(item => {
    // Handle both nested dinner object (previous structure) and flat dinner object (new structure)
    const dinner = item.dinner || item;
    // Ensure date is valid before creating Date object
    const dateStr = dinner.date;
    const dateObj = dateStr ? new Date(dateStr) : new Date();
    
    return {
      id: dinner.id,
      date: dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
      time: dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      location: dinner.location || 'Location TBD',
      cuisine: dinner.dinner_type || 'Surprise',
      status: item.request_status || 'confirmed'
    };
  });

  const handleViewDetails = (dinnerId) => {
    router.push(`/dinner-details?id=${dinnerId}`);
  };

  const handleMyAccount = () => {
    router.push('/account');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#080714] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFAA55]"></div>
      </div>
    );
  }

  return (
    <YourDinnerPage
      dinners={mappedDinners}
      onViewDetails={handleViewDetails}
      onMyAccount={handleMyAccount}
      error={error ? (error.message || 'Failed to load dinners') : null}
    />
  );
}
