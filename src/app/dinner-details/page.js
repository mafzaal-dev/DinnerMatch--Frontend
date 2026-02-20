"use client";

import { useEffect, useMemo } from 'react';
import DinnerDetailsPage from '../../../components/pages/DinnerDetailsPage';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSubscription, useRequestedDinners, useDinnerDetail, useUpdateAttendance } from '../../hooks/useDinners';

export default function DinnerDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlDinnerId = searchParams.get('id');

  // Fetch all necessary data using React Query
  const { 
    data: subscriptionData = [], 
    isLoading: isSubLoading 
  } = useSubscription();

  const { 
    data: requestedDinners = [], 
    isLoading: isDinnersLoading 
  } = useRequestedDinners();

  // Determine the dinner ID to fetch details for
  const currentDinnerId = useMemo(() => {
    if (urlDinnerId) return urlDinnerId;
    if (requestedDinners.length > 0) {
      const firstItem = requestedDinners[0];
      const firstDinner = firstItem.dinner || firstItem;
      return firstDinner.id;
    }
    return null;
  }, [urlDinnerId, requestedDinners]);

  const { 
    data: dinnerDetailData, 
    isLoading: isDetailLoading,
    error: detailError
  } = useDinnerDetail(currentDinnerId);

  // Process upcoming dates
  const upcomingDates = useMemo(() => {
    return requestedDinners.map(item => {
      const dinner = item.dinner || item;
      const dateStr = dinner.date;
      const dateObj = dateStr ? new Date(dateStr) : new Date();

      return {
        date: dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
        city: dinner.location || 'Location TBD',
        status: item.request_status || 'confirmed',
        originalDate: dateObj
      };
    });
  }, [requestedDinners]);

  // Process dinner details
  const dinnerData = useMemo(() => {
    if (!dinnerDetailData) return null;
    
    const d = dinnerDetailData;
    const dateObj = new Date(d.date);
    
    // Process group members for stats
    const members = d.group?.members || [];
    const totalMembers = members.length;
    
    const nationalityCounts = {};
    const industryCounts = {};
    
    members.forEach(member => {
      const profile = member.profile || {};
      const nationality = profile.nationality || 'Unknown';
      const industry = profile.industry || 'Unknown';
      
      if (nationality) nationalityCounts[nationality] = (nationalityCounts[nationality] || 0) + 1;
      if (industry) industryCounts[industry] = (industryCounts[industry] || 0) + 1;
    });

    const calculatePercentages = (counts) => {
      const percentages = {};
      Object.keys(counts).forEach(key => {
        percentages[key] = totalMembers > 0 
          ? Math.round((counts[key] / totalMembers) * 100) 
          : 0;
      });
      return percentages;
    };

    return {
      city: d.location,
      date: dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      time: dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      restaurant: d.group?.restaurant?.name || "To be announced", // Use restaurant name if available, else placeholder
      address: d.group?.restaurant?.address || d.location,
      status: d.dinner_status,
      group: {
        languages: [], // Not provided in API yet
        nationalities: calculatePercentages(nationalityCounts),
        occupations: calculatePercentages(industryCounts),
        attendance_stats: d.group?.attendance_stats || {
          total: 0,
          there: 0,
          late: 0,
          cant_make_it: 0,
          attended: 0,
          no_response: 0
        }
      },
    };
  }, [dinnerDetailData]);

  const handleManageSubscription = () => {
    router.push('/subscription');
  };

  const handleContactSupport = () => {
    router.push('/help-center');
  };

  const handleMyAccount = () => {
    router.push('/account');
  };

  const { mutate: updateAttendance } = useUpdateAttendance();

  const handleRSVP = (status) => {
    console.log('RSVP:', status);
    
    // Map UI status to API status
    let apiStatus = '';
    if (status === "I'll be There") apiStatus = 'there';
    else if (status === "I'll be Late") apiStatus = 'late';
    else if (status === "Can't Make It") apiStatus = 'cant_make_it';
    
    if (currentDinnerId && apiStatus) {
      updateAttendance({ 
        dinnerId: currentDinnerId, 
        status: apiStatus 
      }, {
        onSuccess: () => {
          // You might want to show a toast or notification here
          console.log('Attendance updated successfully');
        },
        onError: (error) => {
          console.error('Failed to update attendance:', error);
          // Handle error (show toast etc)
        }
      });
    }
  };

  const handleCopyAddress = (address) => {
    console.log('Address copied:', address);
  };

  const isLoading = isSubLoading || isDinnersLoading || (currentDinnerId && isDetailLoading);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFAA55]"></div>
      </div>
    );
  }

  // Handle case where no dinner is selected or found (e.g. user has no requests)
  if (!currentDinnerId && !isDinnersLoading) {
     // You might want to redirect or show a specific empty state here
     // For now, we render the page with empty data which might look like "No upcoming dinners"
  }

  return (
    <DinnerDetailsPage
      dinner={dinnerData || undefined}
      upcomingDates={upcomingDates}
      subscriptionData={subscriptionData}
      onManageSubscription={handleManageSubscription}
      onContactSupport={handleContactSupport}
      onMyAccount={handleMyAccount}
      onRSVP={handleRSVP}
      onCopyAddress={handleCopyAddress}
    />
  );
}
