import React from 'react';

const QuestionList = ({ questions, deleteQuestion }) => {
  return (
    <div>
      <h2>Question List</h2>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.question}</h3>
          <ul>
            {question.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <p>Correct Answer: {question.correctAnswer}</p>
          <button onClick={() => deleteQuestion(question.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
