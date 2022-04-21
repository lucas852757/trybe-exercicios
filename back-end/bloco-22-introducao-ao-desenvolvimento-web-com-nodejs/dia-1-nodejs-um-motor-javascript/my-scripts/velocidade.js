//console.log("It's works!");

import { questionFloat } from 'readline-sync';

const speed = questionFloat('Type the speedness (m): ');
const time =  questionFloat('type the time (s): ')

const response = speed / time;

console.log(`The middle speedness is ${response}m/s` );