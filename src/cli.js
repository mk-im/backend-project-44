import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getNumberArray = (min, max, size = 3) => {
  const numbers = [];
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  for (let i = 0; i < size; i += 1) {
    numbers.push(Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled));
  }
  return numbers;
};

let userName = '';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName += readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

export {
  getNumberArray, getRandomNumber, greeting, userName,
};
