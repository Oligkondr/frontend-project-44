import {startGame} from '../index.js';

const brainPrime = () => {
  const name = startGame('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${name}`);
};

export default brainPrime;
