
const generateRandomNodeJsCode = () => {
let result;

const possibleChars = 'abcdefghijklmnopqrstuvwxyz';
const possibleNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

for (let i = 0; i < 10; i++) {
result += possibleChars[Math.floor(Math.random() * possibleChars.length)];
}

for (let i = 0; i < 3; i++) {
result += possibleNums[Math.floor(Math.random() * possibleNums.length)];
}

return result;
};