const getRandomMathProblem = () => {
  const numbers = [1, 2, 3, 4, 5];
  const operators = ['+', '-', '*', '/'];
  let problem = '';

  for (let i = 0; i < 3; i++) {
    problem += `${numbers[Math.floor(Math.random() * numbers.length)]} ${operators[Math.floor(Math.random() * operators.length)]} `;
  }

  return problem;
};
