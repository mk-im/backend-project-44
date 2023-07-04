import readlineSync from 'readline-sync';
import name from '../src/cli.js';

const isEven = (num) => num % 2 === 0 ? true : false;
let correctAnswers = 0;
const numbers = [];

export const getNumberArray = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  for (let i = 0; i < 3; i += 1) {
    numbers.push(Math.floor(Math.random() * (max - min) + min));
  }
  return numbers;
};

export const brainEven = (arr) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (const number of arr) {
    const userAnswer = readlineSync.question(`Question:${number}\n Your answer:`);
    if (isEven(number) && userAnswer === 'yes' && correctAnswers < 3 || !isEven(number) && userAnswer === 'no' && correctAnswers < 3) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".\n Let's try again, ${name}!`)
      break;
  }
}
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
