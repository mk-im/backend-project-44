import { name } from '../src/cli.js';

const gameLogic = (correctAnswer, userAnswer, correctAnswers = 0) => {
  if (correctAnswers < 3) {
    if (correctAnswer === userAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`);
    }
  } else if (correctAnswers >= 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameLogic;
