import readlineSync from 'readline-sync';
import name from '../src/cli.js';

let correctAnswers = 0;


const generateProgression = (start, step, maxElems) => {
        const progression = [];
        for (let i = 0; i < maxElems - 1; i += 1) {
            progression.push(start + i * step);
        }
        return progression;
};


const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const hideRandomElement = (array) => {
    const hiddenElementIndex = randomNumber(0, array.length - 1);
    const hiddenElement = array[hiddenElementIndex];
    const arrayCopy = [...array];
    arrayCopy[hiddenElementIndex] = '..';
    const result = arrayCopy.join(' ');

    return [hiddenElement, result];
};

export const brainProgression = () => {
    console.log('What number is missing in the progression?');
    for (let i = 0; correctAnswers < 3; i += 1) {
        const start = randomNumber(1, 15);
        const step = randomNumber(5, 15);
        const maxElems = randomNumber(6, 15);
        const progression = generateProgression(start, step, maxElems);
        const [correctAnswer, progressionString] = hideRandomElement(progression);
        const userAnswer = readlineSync.question(`Question: ${ progressionString }\n Your answer:`);
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
