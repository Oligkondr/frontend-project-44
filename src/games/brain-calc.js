import readlineSync from 'readline-sync';
import { bodyGame, checkAnswer, getNumber, getOperation, startGame } from '../index.js';

const brainCalc = () => {
  const name = startGame('What is the result of the expression?');
  bodyGame(name, () => {
    const factor1 = getNumber();
    const factor2 = getNumber();
    const operation = getOperation();
    console.log(`Question: ${factor1} ${operation} ${factor2}`);
    const answer = readlineSync.question('Your answer: ');
    const message = checkAnswer(name, answer, () => {
      let correctAnswer = 0;
      if (operation == '+') {
        correctAnswer = factor1 + factor2;
      } else if (operation == '-') {
        correctAnswer = factor1 - factor2;
      } else if (operation == '*') {
        correctAnswer = factor1 * factor2;
      }
      return correctAnswer;
    });
    console.log(message);
    return message;
  });
};

export default brainCalc;
