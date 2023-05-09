import React, { useState } from 'react';
import Question from './Question';
import { getRandomQuestions } from '../data/questions';

const StudentPanel = () => {
  const [examStarted, setExamStarted] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);

  const startExam = () => {
    const questions = getRandomQuestions(10); // Get 10 random questions
    setExamQuestions(questions);
    setExamStarted(true);
  };

  const submitAnswer = (questionId, selectedAnswer) => {
    // Implement answer submission logic here
    console.log(`Question ${questionId} - Selected Answer: ${selectedAnswer}`);
  };

  return (
    <div>
      <h1>Student Panel</h1>
      {!examStarted ? (
        <button onClick={startExam}>Start Exam</button>
      ) : (
        examQuestions.map((question) => (
          <Question key={question.id} question={question} submitAnswer={submitAnswer} />
        ))
      )}
    </div>
  );
};

export default StudentPanel;
