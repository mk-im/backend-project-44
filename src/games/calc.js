import gameLogic from '../index.js';
import { getNumberArray } from '../utils.js';

const description = 'What is the result of the expression?';

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

const gameRound = () => {
  const numbers = getNumberArray(1, 100, 2);
  const operation = getMathOperation();
  const question = `${numbers[0]} ${operation} ${numbers[1]}`;
  const correctAnswer = calculation(numbers, operation).toString();
  return [question, correctAnswer];
};

const brainCalcGame = () => {
  gameLogic(description, gameRound);
};

export default brainCalcGame;
