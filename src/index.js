import { brainEven, getNumberArray } from '../bin/brain-even.js';
import { brainCalc } from '../bin/brain-calc.js'
import readlineSync from 'readline-sync';

const games = ['brain-even', 'brain-calc'];

for (const game of games) {
    console.log(game)
};

const game = readlineSync.question('Choose the game: ');


if (game == 'brain-even') {
    brainEven(getNumberArray(1, 100));
}
else if (game == 'brain-calc') {
    brainCalc()
}
