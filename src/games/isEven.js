import { getRandomNumber } from '../cli.js';
import gameLogic from '../gameLogic.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const gameRound = () => {
  const number = getRandomNumber(1, 100);
  const userAnswer = isEven(number);
  return [number, userAnswer];
};

const isEvenGame = () => {
  gameLogic(description, gameRound);
};

export default isEvenGame;
