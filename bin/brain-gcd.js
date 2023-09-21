import readlineSync from 'readline-sync';
import name from '../src/cli.js';

let correctAnswers = 0;



export const gcd = (number1, number2) => {
    if (!number2) {
        return number1;
    }

    return gcd(number2, number1 % number2);
};

export const getNumbers = (min, max) => {
    const numbers = [];
    min = Math.ceil(min);
    max = Math.floor(max);
    for (let i = 0; i < 2; i += 1) {
        numbers.push(Math.floor(Math.random() * (max - min) + min));
    }
    return numbers;
};

export const brainGcd = () => {
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; correctAnswers < 3; i += 1) {
        const numbers = getNumbers(1, 100);
        const userAnswer = readlineSync.question(`Question:${numbers[0]} ${numbers[1]}\n Your answer:`);
        const correctAnswer = gcd(numbers[0], numbers[1]);
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
