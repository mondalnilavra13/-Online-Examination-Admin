import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

const AdminPanel = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const deleteQuestion = (questionId) => {
    setQuestions(questions.filter((question) => question.id !== questionId));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <QuestionForm addQuestion={addQuestion} />
      <QuestionList questions={questions} deleteQuestion={deleteQuestion} />
    </div>
  );
};

export default AdminPanel;
