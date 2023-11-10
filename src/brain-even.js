import readlineSync from 'readline-sync';

const getNumber = () => Math.floor(Math.random() * 100);

const checkAnswer = (answer, number, name) => {
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  let message = ''
  if (answer === correctAnswer) {
    message = 'Correct!';
  } else {
    message = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's tray again, ${name}!`;
  }
  return message;
};

const startTheGame = () => {
  console.log('brain-even');
  console.log('');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const number = getNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const message = checkAnswer(answer, number, name);
    console.log(message);
    if (message === 'Correct!') {
      i += 1;
    } else {
      break;
    }
  }
  if (i === 3) console.log(`Congratulations, ${name}!`);
};

export { startTheGame, getNumber, checkAnswer };
