const fetch = require("node-fetch");

async function solveMathProblem(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.solution);
}

module.exports = solveMathProblem;
