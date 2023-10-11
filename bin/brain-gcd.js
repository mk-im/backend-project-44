import readlineSync from 'readline-sync';
import { getNumberArray } from '../src/cli.js';
import gameLogic from '../src/gameLogic.js';

const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const brainGcd = () => {
  for (let i = 0; i < 3; i += 1) {
    const numbers = getNumberArray(1, 100);
    const userAnswer = readlineSync.question(`Question:${numbers[0]} ${numbers[1]}\n Your answer:`);
    const correctAnswer = gcd(numbers[0], numbers[1]).toString();
    gameLogic(correctAnswer, userAnswer);
    if (correctAnswer !== userAnswer) {
      break;
    }
  }
};

export default brainGcd;
