/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';
import { greeting, userName } from './cli.js';

const gameLogic = (description, gameRound, correctAnswers = 0) => {
  greeting();
  console.log(description);
  const roundsNumber = 3;
  for (let i = 0; i < roundsNumber; i += 1) {
    const [question, correctAnswer] = gameRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (correctAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameLogic;
