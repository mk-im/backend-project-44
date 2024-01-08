/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';
import brainEven from '../bin/brain-even.js';
import brainCalc from '../bin/brain-calc.js';
import brainGcd from '../bin/brain-gcd.js';
import brainProgression from '../bin/brain-progression.js';
import brainPrime from '../bin/brain-prime.js';
import { brainGames } from '../bin/brain-games.js';
import games from './games.js';

for (const game of games) {
  console.log(game);
}

const game = readlineSync.question('Choose the game: ');

if (game === 'brain-even') {
  brainEven();
} else if (game === 'brain-calc') {
  brainCalc();
} else if (game === 'brain-gcd') {
  brainGcd();
} else if (game === 'brain-progression') {
  brainProgression();
} else if (game === 'brain-prime') {
  brainPrime();
}
