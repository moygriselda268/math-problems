const getRandomNumber = () => {
  // generate a random number between 1 and 10
  const num = Math.floor(Math.random() * 10) + 1;
  return num;
};

const solveMathProblems = (problems) => {
  let solution = {};
  problems.forEach((problem) => {
    // check if the problem is a multiplication or division
    const operator = problem[2];
    switch (operator) {
      case 'x':
        solution[problem] = getRandomNumber() * getRandomNumber();
        break;
      case '/':
        solution[problem] = getRandomNumber() / getRandomNumber();
        break;
      default:
        // if the operator is not recognized, return undefined
        solution[problem] = undefined;
    }
  });
  return solution;
};

// Example usage:
const problems = [
  '5x + 3',
  '2/4',
  '7/10',
];
console.log(solveMathProblems(problems));
