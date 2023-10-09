/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';
import { name, getNumberArray } from '../src/cli.js';

const isPrime = (number) => {
  let divisor = 2;

  while (number > divisor) {
    if (number % divisor === 0) {
      return 'no';
    }
    divisor += 1;
  }
  return 'yes';
};

let correctAnswers = 0;

const brainPrime = () => {
  for (const number of getNumberArray(1, 100)) {
    const userAnswer = readlineSync.question(`Question:${number}\n Your answer:`);
    const correctAnswer = isPrime(number);
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

export default brainPrime;
