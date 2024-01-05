#!/usr/bin/env node
import readlineSync from 'readline-sync';

let userName = '';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  userName += readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export { brainGames, userName};