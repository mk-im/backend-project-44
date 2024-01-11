import { getRandomNumber } from '../utils.js';
import gameLogic from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let divisor = 2;

  while (number > divisor) {
    if (number % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
};

const gameRound = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const number = getRandomNumber(minNumber, maxNumber);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainPrimeGame = () => {
  gameLogic(description, gameRound);
};

export default brainPrimeGame;
