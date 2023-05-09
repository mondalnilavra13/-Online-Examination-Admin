import React, { useState } from 'react';

const Question = ({ question, submitAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerSelection = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleAnswerSubmission = (e) => {
    e.preventDefault();
    submitAnswer(question.id, selectedAnswer);
    setSelectedAnswer('');
  };

  return (
    <div>
      <h3>{question.question}</h3>
      <form onSubmit={handleAnswerSubmission}>
        {question.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                onChange={handleAnswerSelection}
              />
              {option}
            </label>
          </div>
        ))}
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
};

export default Question;
