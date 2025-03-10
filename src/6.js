  const random = require('random');

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  module.exports = {
    getRandom: getRandom
  };
  