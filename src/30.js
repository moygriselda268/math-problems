const express = require('express');
const app = express();

app.get('/math-problems', (req, res) => {
  const questions = [
    { question: 'Math problem 1', answer: 'Answer 1' },
    { question: 'Math problem 2', answer: 'Answer 2' },
    { question: 'Math problem 3', answer: 'Answer 3' }
  ];

  res.json(questions);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
