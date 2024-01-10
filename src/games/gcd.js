import { getNumberArray } from '../utils.js';
import gameLogic from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const gameRound = () => {
  const numbers = getNumberArray(1, 100);
  const question = `${numbers[0]} ${numbers[1]}`;
  const correctAnswer = gcd(numbers[0], numbers[1]).toString();
  return [question, correctAnswer];
};

const brainGcdGame = () => {
  gameLogic(description, gameRound);
};

export default brainGcdGame;
