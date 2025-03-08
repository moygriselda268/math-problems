
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const solveMathProblem = () => {
  const num1 = getRandomInt(10);
  const num2 = getRandomInt(10);
  const operator = ['+', '-', '*', '/'][getRandomInt(4)];
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = Infinity;
      }
      break;
  }

  return `${num1} ${operator} ${num2} = ${result}`;
};

module.exports = solveMathProblem;