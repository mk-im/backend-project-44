/* eslint-disable no-mixed-operators */
/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';
import { getNumberArray as getArray } from '../src/cli.js';
import gameLogic from '../src/gameLogic.js';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');
const correctAnswers = 0;

const brainEven = () => {
  const numbers = getArray(1, 100);
  for (const number of numbers) {
    const userAnswer = readlineSync.question(`Question:${number}\n Your answer:`);
    const correctAnswer = isEven(number);
    gameLogic(correctAnswer, userAnswer, correctAnswers);
    if (correctAnswer !== userAnswer) {
      break;
    }
  }
};

export default brainEven;
