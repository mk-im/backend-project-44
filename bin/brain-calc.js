import readlineSync from 'readline-sync';
import { getNumberArray } from '../src/cli.js';
import gameLogic from '../src/gameLogic.js';

const getMathOperation = () => {
  const operations = ['substraction', 'addition', 'multiplication'];
  const result = operations[Math.floor(Math.random() * operations.length)];
  if (result === 'addition') {
    return '+';
  } if (result === 'substraction') {
    return '-';
  }
  return '*';
};

const calculation = (numbers, operation) => {
  if (operation === '-') {
    return (numbers[0] - numbers[1]);
  }
  if (operation === '*') {
    return (numbers[0] * numbers[1]);
  }
  return (numbers[0] + numbers[1]);
};

const brainCalc = () => {
  const correctAnswers = 0;
  for (let i = 0; correctAnswers < 3; i += 1) {
    const numbers = getNumberArray(1, 100);
    const operation = getMathOperation();
    const userAnswer = readlineSync.question(`Question:${numbers[0]} ${operation} ${numbers[1]}\n Your answer:`);
    const correctAnswer = calculation(numbers, operation).toString();
    gameLogic(correctAnswer, userAnswer, correctAnswers);
    if (correctAnswer !== userAnswer) {
      break;
    }
  }
};

export default brainCalc;
