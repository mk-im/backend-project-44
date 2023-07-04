#!/usr/bin/env node

import name from '../src/cli.js';
import { brainEven, getNumberArray } from './brain-even.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name}!`);
brainEven(getNumberArray(1, 100));
