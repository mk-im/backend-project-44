import { getNumberArray } from '../cli.js';
import gameLogic from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const gameRound = () => {
  const numbers = getNumberArray(1, 100);
  const question = `${numbers[0]}`;
  const correctAnswer = isPrime(numbers[0]).toString();
  return [question, correctAnswer];
};

const brainPrimeGame = () => {
  gameLogic(description, gameRound);
};

export default brainPrimeGame;
