import readlineSync from 'readline-sync';
import {
  bodyGame, checkAnswer, getNumber, startGame,
} from '../index.js';

const brainPrime = () => {
  const name = startGame('Answer "yes" if given number is prime. Otherwise answer "no".');
  bodyGame(name, () => {
    const number = getNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const message = checkAnswer(name, answer, () => {
      let correctAnswer = number !== 1;
      for (let i = 2; i < number; i += 1) {
        number % i === 0 ? correctAnswer *= false : correctAnswer *= true;
      }
      return correctAnswer ? 'yes' : 'no';
    });
    console.log(message);
    return message;
  });
};

export default brainPrime;
