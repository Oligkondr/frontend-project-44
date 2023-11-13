import readlineSync from 'readline-sync';
import {
  bodyGame, checkAnswer, getNumber, startGame,
} from '../index.js';

const brainEven = () => {
  const name = startGame('Answer "yes" if the number is even, otherwise answer "no".');
  bodyGame(name, () => {
    const number = getNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const message = checkAnswer(name, answer, () => (number % 2 === 0 ? 'yes' : 'no'));
    console.log(message);
    return message;
  });
};

export default brainEven;
