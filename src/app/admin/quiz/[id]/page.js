"use client";

import { QuizDetailsPage } from '../../../../components/admin';
import { useParams } from 'next/navigation';

export default function QuizDetails() {
  const params = useParams();
  const quizId = params.id;

  return <QuizDetailsPage quizId={quizId} />;
}

