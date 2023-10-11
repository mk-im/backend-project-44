/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';
import { getNumberArray } from '../src/cli.js';
import gameLogic from '../src/gameLogic.js';

const isPrime = (number) => {
  let divisor = 2;

  while (number > divisor) {
    if (number % divisor === 0) {
      return 'no';
    }
    divisor += 1;
  }
  return 'yes';
};

const brainPrime = () => {
  const numbers = getNumberArray(1, 100);
  for (const number of numbers) {
    const userAnswer = readlineSync.question(`Question:${number}\n Your answer:`);
    const correctAnswer = isPrime(number);
    gameLogic(correctAnswer, userAnswer);
    if (correctAnswer !== userAnswer) {
      break;
    }
  }
};

export default brainPrime;
