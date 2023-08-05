import readlineSync from 'readline-sync';
import name from '../src/cli.js';

let correctAnswers = 0;

export const getNumbers = (min, max) => {
    const numbers = [];
    min = Math.ceil(min);
    max = Math.floor(max);
    for (let i = 0; i < 2; i += 1) {
      numbers.push(Math.floor(Math.random() * (max - min) + min));
    }
    return numbers;
  };

  export const getMathOperation = () => {
    const operations = ['substraction', 'addition', 'multiplication'];
    let result = operations[Math.floor(Math.random()*operations.length)];
    if (result === 'addition') {
      return '+'
    } else if (result === 'substraction') {
      return '-'
    }
    return '*'
  };

  export const calculation = (numbers, operation) => {
    if (operation === '-') {
        return (numbers[0] - numbers[1])
    }
    else if (operation === '*') {
        return (numbers[0] * numbers[1])
    }
    else return (numbers[0] + numbers[1])
    
  }
  
export const brainCalc = () => {
    console.log('What is the result of the expression?');
    for (let i = 0; correctAnswers < 3; i += 1) {
      const numbers = getNumbers(1, 100);
      const operation = getMathOperation();
      const userAnswer = readlineSync.question(`Question:${numbers[0]} ${operation} ${numbers[1]}\n Your answer:`);
        const correctAnswer = calculation(numbers, operation);
      if (correctAnswer == userAnswer && correctAnswers < 3) {
        correctAnswers += 1;
        console.log('Correct!');
      } else {
          console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`)
        break;
      }
  }
    if (correctAnswers === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  };