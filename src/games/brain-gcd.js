import { bodyGame, checkAnswer, getNumber, startGame } from '../index.js';
import readlineSync from 'readline-sync';

const brainGcd = () => {
  const name = startGame('Find teh greatest common divisor of given numbers.');
  bodyGame(name, () => {
    const number1 = getNumber();
    const number2 = getNumber();
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const message = checkAnswer(name, answer, () => {
      let maxNum = Math.max(number1, number2);
      let minNum = Math.min(number1, number2);
      while (maxNum - minNum !== 0) {
        const var1 = maxNum - minNum;
        maxNum = Math.max(var1, minNum);
        minNum = Math.min(var1, minNum);
      }
      return maxNum;
    });
    console.log(message);
    return message;
  });
};

export default brainGcd;
