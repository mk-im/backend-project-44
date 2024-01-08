import { getRandomNumber } from '../cli.js';
import gameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const gameRound = () => {
  const number = getRandomNumber(1, 100);
  const userAnswer = isEven(number);
  return [number, userAnswer];
};

const brainEvenGame = () => {
  gameLogic(description, gameRound);
};

export default brainEvenGame;
