import readlineSync from 'readline-sync';
import {bodyGame, checkAnswer, getProgression, startGame} from '../index.js';

const brainProgression = () => {
  const name = startGame('What number is missing in the progression?');
  bodyGame(name, () => {
    const progression = getProgression();
    const hiddenElement = progression.pop();
    console.log(`Question: ${progression.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    const message = checkAnswer(name, answer, () => {
      return hiddenElement;
    });
    console.log(message);
    return message;
  });
};

export default brainProgression;
