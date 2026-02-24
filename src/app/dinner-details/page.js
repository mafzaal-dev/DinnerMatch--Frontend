"use client";

import { useEffect, useMemo, Suspense, useState } from 'react';
import DinnerDetailsPage from '../../../components/pages/DinnerDetailsPage';
import SubscriptionModal from '../../../components/modals/SubscriptionModal';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSubscription, useRequestedDinners, useDinnerDetail, useUpdateAttendance, useAvailableDinners, useRequestDinner, useSwipeDinner, useRateGroup, useRateRestaurant } from '../../hooks/useDinners';
import { toast } from 'react-hot-toast';

function DinnerDetailsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlDinnerId = searchParams.get('id');
  const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false);

  // Fetch all necessary data using React Query
  const { 
    data: subscriptionData = [], 
    isLoading: isSubLoading 
  } = useSubscription();

  const { 
    data: requestedDinners = [], 
    isLoading: isRequestedLoading 
  } = useRequestedDinners();

  // Fetch available dinners (upcoming)
  const today = new Date().toISOString().split('T')[0];
  const {
    data: availableDinners = [],
    isLoading: isAvailableLoading
  } = useAvailableDinners(today);

  // Determine the dinner ID to fetch details for (Current User's Dinner)
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

  // Process available dinners for the "Upcoming/Reschedule" list
  const upcomingDates = useMemo(() => {
    // Filter out the current dinner from the list
    const filteredDinners = availableDinners.filter(dinner => dinner.id !== currentDinnerId);
    
    return filteredDinners.map(dinner => {
      const dateStr = dinner.date;
      const dateObj = dateStr ? new Date(dateStr) : new Date();

      return {
        id: dinner.id,
        date: dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
        city: dinner.location || dinner.city || 'Location TBD',
        status: 'Available', // Or check if requested? But requested ones should be currentDinnerId
        originalDate: dateObj,
        title: dinner.title // useful for modal
      };
    });
  }, [availableDinners, currentDinnerId]);

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

    const restaurantObj = d.restaurant || d.group?.restaurant;
    // Format address: "Location, City" - fallback to just location or city if one is missing
    const restaurantAddress = restaurantObj 
      ? [restaurantObj.location, restaurantObj.city].filter(Boolean).join(', ')
      : d.location;

    return {
      id: d.id,
      city: d.location,
      isoDate: d.date,
      date: dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      time: dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      restaurant: restaurantObj?.name || "To be announced",
      restaurantId: restaurantObj?.id,
      address: restaurantAddress,
      status: d.dinner_status,
      current_user_attendance: d.current_user_attendance,
      group: {
        id: d.group?.id,
        members: members,
        languages: [],
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
    setSubscriptionModalOpen(true);
  };

  const handleContactSupport = () => {
    router.push('/help-center');
  };

  const handleMyAccount = () => {
    router.push('/account');
  };

  const { mutate: updateAttendance } = useUpdateAttendance();
  const { mutate: requestDinner } = useRequestDinner();
  const { mutate: swipeDinner } = useSwipeDinner();
  const { mutate: rateGroup } = useRateGroup();
  const { mutate: rateRestaurant } = useRateRestaurant();

  const handleFeedbackSubmit = async (feedback) => {
    
    if (feedback.memberRatings && Object.keys(feedback.memberRatings).length > 0 && feedback.groupId) {
       const ratingsPayload = Object.entries(feedback.memberRatings).map(([userId, rating]) => ({
         user_id: userId,
         rating: rating,
         comment: ""
       }));
       
       rateGroup({ groupId: feedback.groupId, ratings: ratingsPayload }, {
         onSuccess: () => toast.success("Group feedback submitted!"),
         onError: (e) => toast.error("Failed to submit group feedback: " + e.message)
       });
    }

    if (feedback.restaurantRating && feedback.restaurantId) {
      rateRestaurant({ 
        restaurantId: feedback.restaurantId, 
        rating: feedback.restaurantRating,
        comment: "" 
      }, {
        onSuccess: () => toast.success("Restaurant feedback submitted!"),
         onError: (e) => toast.error("Failed to submit restaurant feedback: " + e.message)
      });
    }
  };

  const handleRSVP = (status) => {
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
          console.log('Attendance updated successfully');
        },
        onError: (error) => {
          console.error('Failed to update attendance:', error);
          toast.error("Failed to update RSVP");
        }
      });
    }
  };

  const handleCopyAddress = (address) => {
    console.log('Address copied:', address);
  };

  const handleReschedule = (newDinnerId) => {
    // If we have a current dinner, we use the swipe API
    if (currentDinnerId) {
      swipeDinner({ 
        currentDinnerId: currentDinnerId, 
        newDinnerId: newDinnerId 
      }, {
        onSuccess: () => {
          toast.success("Successfully rescheduled!");
        },
        onError: (err) => {
          toast.error(err.message || "Failed to reschedule");
        }
      });
    } else {
      // Otherwise fallback to normal request (join)
      requestDinner({ dinnerId: newDinnerId }, {
        onSuccess: () => {
          toast.success("Successfully joined!");
        },
        onError: (err) => {
          toast.error(err.message || "Failed to join dinner");
        }
      });
    }
  };

  const isLoading = isSubLoading || isRequestedLoading || (currentDinnerId && isDetailLoading) || isAvailableLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFAA55]"></div>
      </div>
    );
  }

  // If no current dinner, show available dinners? 
  // DinnerDetailsPage handles empty 'dinner' prop gracefully mostly, or we can pass undefined.
  // We'll let DinnerDetailsPage render, passing undefined for dinner if no current one.

  return (
    <>
      <DinnerDetailsPage
        dinner={dinnerData || undefined}
        upcomingDates={upcomingDates}
        subscriptionData={subscriptionData}
        onManageSubscription={handleManageSubscription}
        onContactSupport={handleContactSupport}
        onMyAccount={handleMyAccount}
        onRSVP={handleRSVP}
        onCopyAddress={handleCopyAddress}
        onReschedule={handleReschedule}
        onSubmitFeedback={handleFeedbackSubmit}
      />
      <SubscriptionModal
        isOpen={subscriptionModalOpen}
        onClose={() => setSubscriptionModalOpen(false)}
      />
    </>
  );
}

export default function DinnerDetails() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFAA55]"></div>
      </div>
    }>
      <DinnerDetailsContent />
    </Suspense>
  );
}
