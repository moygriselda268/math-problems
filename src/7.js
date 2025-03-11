const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
}

const mathProblems = [
  `What is ${getRandomNumber()} + ${getRandomNumber()}`,
  `What is ${getRandomNumber()} - ${getRandomNumber()}`,
  `What is ${getRandomNumber()} x ${getRandomNumber()}`,
  `What is ${getRandomNumber()} / ${getRandomNumber()}`
];

const getMathProblem = () => {
  return mathProblems[Math.floor(Math.random() * mathProblems.length)];
}
