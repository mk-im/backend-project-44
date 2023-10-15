#!/usr/bin/env node
import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
};

export { brainGames, name };
