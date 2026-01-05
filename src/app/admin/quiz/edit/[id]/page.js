"use client";

import { CreateQuizPage } from '../../../../../components/admin';
import { useParams } from 'next/navigation';

export default function EditQuiz() {
  const params = useParams();
  const quizId = params.id;

  // In a real app, you'd fetch the quiz data here and pass it to CreateQuizPage
  return <CreateQuizPage quizId={quizId} isEdit={true} />;
}

