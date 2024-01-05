/* eslint-disable no-unreachable-loop */
import readlineSync from 'readline-sync';

const gameLogic = (description, gameRound, correctAnswers = 0) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  if (correctAnswers < 3) {
    const [task, rightAnswer] = gameRound();
    console.log(`Question: ${task}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameLogic;
