import { brainEven, getNumberArray } from '../bin/brain-even.js';
import { brainCalc } from '../bin/brain-calc.js';
import { brainGcd } from '../bin/brain-gcd.js';
import { brainProgression } from '../bin/brain-progression.js';
import readlineSync from 'readline-sync';

const games = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression'];

for (const game of games) {
    console.log(game)
};

const game = readlineSync.question('Choose the game: ');


if (game == 'brain-even') {
    brainEven(getNumberArray(1, 100));
}
else if (game == 'brain-calc') {
    brainCalc();
}
else if (game == 'brain-gcd') {
    brainGcd();
}
else if (game == 'brain-progression') {
    brainProgression();
}