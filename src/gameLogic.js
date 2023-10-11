/* eslint-disable no-unreachable-loop */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */

import { name } from './cli.js';

const gameLogic = (correctAnswer, userAnswer, correctAnswers = 0) => {
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
  if (correctAnswer === userAnswer && correctAnswers < 3) {
    correctAnswers += 1;
    console.log('Correct!');
    return correctAnswers;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`);
};

export default gameLogic;
