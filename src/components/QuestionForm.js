import React, { useState } from 'react';

const QuestionForm = ({ addQuestion }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleInputChange = (e, index) => {
    const updatedOptions = [...options];
    updatedOptions[index] = e.target.value;
    setOptions(updatedOptions);
  };

  const handleCorrectAnswerChange = (e) => {
    setCorrectAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      id: Date.now(),
      question,
      options,
      correctAnswer,
    };
    addQuestion(newQuestion);
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question:
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </label>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            Option {index + 1}:
            <input
              type="text"
              value={option}
              onChange={(e) => handleInputChange(e, index)}
            />
          </label>
        </div>
      ))}
      <label>
        Correct Answer:
        <input
          type="text"
          value={correctAnswer}
          onChange={handleCorrectAnswerChange}
        />
      </label>
      <button type="submit">Add Question</button>
    </form>
  );
};

export default QuestionForm;
