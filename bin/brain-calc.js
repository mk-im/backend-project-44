import readlineSync from 'readline-sync';
import { name, getNumberArray } from '../src/cli.js';

let correctAnswers = 0;

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
  for (let i = 0; correctAnswers < 3; i += 1) {
    const numbers = getNumberArray(1, 100);
    const operation = getMathOperation();
    const userAnswer = readlineSync.question(`Question:${numbers[0]} ${operation} ${numbers[1]}\n Your answer:`);
    const correctAnswer = calculation(numbers, operation);
    if (correctAnswer === userAnswer && correctAnswers < 3) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainCalc;
