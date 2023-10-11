import readlineSync from 'readline-sync';
import { getNumberArray } from '../src/cli.js';

const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const brainGcd = () => {
  for (let i = 0; correctAnswers < 3; i += 1) {
    let correctAnswers = 0;
    const numbers = getNumberArray(1, 100);
    const userAnswer = readlineSync.question(`Question:${numbers[0]} ${numbers[1]}\n Your answer:`);
    const correctAnswer = gcd(numbers[0], numbers[1]);
    gameLogic(correctAnswer, userAnswer, correctAnswers);
    if (correctAnswer !== userAnswer) {
      break;
    }
  }
};

export default brainGcd;
