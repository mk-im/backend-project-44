import gameLogic from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculation = (number1, number2, operation) => {
  switch (operation) {
    case '-':
      return (number1 - number2);
    case '*':
      return (number1 * number2);
    case '+':
      return (number1 + number2);
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const gameRound = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = calculation(number1, number2, operation).toString();
  return [question, correctAnswer];
};

const brainCalcGame = () => {
  gameLogic(description, gameRound);
};

export default brainCalcGame;
