import readlineSync from 'readline-sync';
import brainEven from '../bin/brain-even.js';
import brainCalc from '../bin/brain-calc.js';
import brainGcd from '../bin/brain-gcd.js';
import brainProgression from '../bin/brain-progression.js';
import brainPrime from '../bin/brain-prime.js';
import { brainGames } from '../bin/brain-games.js';
import games from './games.js';

brainGames();

for (const game of games) {
  console.log(game);
}

const game = readlineSync.question('Choose the game: ');

if (game === 'brain-even') {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  brainEven();
} else if (game === 'brain-calc') {
  console.log('What is the result of the expression?');
  brainCalc();
} else if (game === 'brain-gcd') {
  console.log('Find the greatest common divisor of given numbers.');
  brainGcd();
} else if (game === 'brain-progression') {
  console.log('What number is missing in the progression?');
  brainProgression();
} else if (game === 'brain-prime') {
  console.log('Answer "yes" if the number is prime, otherwise answer "no"');
  brainPrime();
}
