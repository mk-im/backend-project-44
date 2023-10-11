/* eslint-disable no-undef */
import readlineSync from 'readline-sync';
import { randomNumber } from '../src/cli.js';
import gameLogic from '../src/gameLogic.js';

const generateProgression = (start, step, maxElems) => {
  const progression = [];
  for (let i = 0; i < maxElems - 1; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const hideRandomElement = (array) => {
  const hiddenElementIndex = randomNumber(0, array.length - 1);
  const hiddenElement = array[hiddenElementIndex];
  const arrayCopy = [...array];
  arrayCopy[hiddenElementIndex] = '..';
  const result = arrayCopy.join(' ');

  return [hiddenElement, result];
};

const brainProgression = () => {
  for (let i = 0; i < 3; i += 1) {
    const start = randomNumber(1, 15);
    const step = randomNumber(5, 15);
    const maxElems = randomNumber(6, 15);
    const progression = generateProgression(start, step, maxElems);
    const [correctAnswer, progressionString] = hideRandomElement(progression);
    const userAnswer = readlineSync.question(`Question: ${progressionString}\n Your answer:`);
    gameLogic(`${correctAnswer}`, userAnswer);
    if (`${correctAnswer}` !== userAnswer) {
      break;
    }
  }
};

export default brainProgression;
