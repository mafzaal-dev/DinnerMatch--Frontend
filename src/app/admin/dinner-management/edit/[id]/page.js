"use client";

import { CreateEditDinnerPage } from '@/components/admin';
import { useParams } from 'next/navigation';

export default function EditDinner() {
  const params = useParams();
  const dinnerId = params.id;

  return <CreateEditDinnerPage dinnerId={dinnerId} isEdit={true} />;
}
