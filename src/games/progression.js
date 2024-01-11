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

const hideElement = (array, hiddenElementIndex) => {
  const arrayCopy = [...array];
  arrayCopy[hiddenElementIndex] = '..';
  const result = arrayCopy.join(' ');
  return result;
};

const gameRound = () => {
  const minNumber = 10;
  const maxNumber = 20;
  const start = getRandomNumber(minNumber, maxNumber);
  const step = getRandomNumber(minNumber, maxNumber);
  const maxElems = getRandomNumber(minNumber, maxNumber);
  const progression = generateProgression(start, step, maxElems);
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);
  const progressionArray = hideElement(progression, hiddenElementIndex);
  const question = `${progressionArray}`;
  const correctAnswer = progression[hiddenElementIndex];
  return [question, correctAnswer.toString()];
};

const brainProgressionGame = () => {
  gameLogic(description, gameRound);
};

export default brainProgressionGame;
