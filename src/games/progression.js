import { getRandomNumber } from '../utils.js';
import gameLogic from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, maxElems) => {
  const progression = [];
  for (let i = 0; i < maxElems - 1; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const hideRandomElement = (array) => {
  const hiddenElementIndex = getRandomNumber(0, array.length - 1);
  const hiddenElement = array[hiddenElementIndex];
  const arrayCopy = [...array];
  arrayCopy[hiddenElementIndex] = '..';
  const result = arrayCopy.join(' ');

  return [hiddenElement, result];
};

const gameRound = () => {
  const start = getRandomNumber(1, 15);
  const step = getRandomNumber(5, 15);
  const maxElems = getRandomNumber(6, 15);
  const progression = generateProgression(start, step, maxElems);
  const [correctAnswer, progressionString] = hideRandomElement(progression);
  const question = `${progressionString}`;
  return [question, correctAnswer.toString()];
};

const brainProgressionGame = () => {
  gameLogic(description, gameRound);
};

export default brainProgressionGame;
