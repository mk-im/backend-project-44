import { getRandomNumber } from '../cli.js';
import gameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameRound = () => {
  const num = getRandomNumber(1, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [num, correctAnswer];
};

const brainEvenGame = () => {
  gameLogic(description, gameRound);
};

export default brainEvenGame;
