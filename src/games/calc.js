import gameLogic from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What is the result of the expression?';

const getMathOperation = () => {
  const operations = ['+', '-', '*']; // на уровне модуля
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  return operation;
};

const calculation = (number1, number2, operation) => {
  switch (operation) {
    case '-':
      return (number1 - number2);
    case '*':
      return (number1 * number2);
    default:
      return (number1 + number2);
  }
};

const gameRound = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const operation = getMathOperation();
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = calculation(number1, number2, operation).toString();
  return [question, correctAnswer];
};

const brainCalcGame = () => {
  gameLogic(description, gameRound);
};

export default brainCalcGame;
