const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

// Generate a random number between 1 and 10
let randomNumber = getRandomNumber();
console.log(`The random number is: ${randomNumber}`);
