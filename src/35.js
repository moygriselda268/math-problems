function getRandomInt(max) {
  var max = Math.floor(max);
  var min = 0;
  if (max === 1 || max === 0) { 
    return 0;
  }
  else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
