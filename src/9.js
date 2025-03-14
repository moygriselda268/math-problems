  const { randomInt } = require('crypto');

function getRandomNumber(min, max) {
    return Math.floor(randomInt(max - min + 1) + min);
}

console.log(getRandomNumber(1, 10));