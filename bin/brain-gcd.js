import readlineSync from 'readline-sync';
import { name, getNumberArray } from '../src/cli.js';

let correctAnswers = 0;

const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const brainGcd = () => {
  for (let i = 0; correctAnswers < 3; i += 1) {
    const numbers = getNumberArray(1, 100);
    const userAnswer = readlineSync.question(`Question:${numbers[0]} ${numbers[1]}\n Your answer:`);
    const correctAnswer = gcd(numbers[0], numbers[1]);
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

export default brainGcd;
