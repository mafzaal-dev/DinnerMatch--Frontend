"use client";

import { CreateEditRestaurantPage } from '@/components/admin';
import { useParams } from 'next/navigation';

export default function EditRestaurant() {
  const params = useParams();
  const restaurantId = params.id;

  return <CreateEditRestaurantPage restaurantId={restaurantId} isEdit={true} />;
}
