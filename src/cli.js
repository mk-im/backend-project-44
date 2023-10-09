import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getNumberArray = (min, max) => {
  const numbers = [];
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  for (let i = 0; i < 3; i += 1) {
    numbers.push(Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled));
  }
  return numbers;
};

export { getNumberArray, randomNumber, name };
