import readlineSync from 'readline-sync';

export const getNumber = () => Math.floor(Math.random() * 100);

export const startGame = (condition) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  return name;
};

export const bodyGame = (name, body) => {
  let i = 0;
  while (i < 3) {
    const message = body();
    if (message === 'Correct!') {
      i += 1;
    } else {
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const checkAnswer = (name, answer, body) => {
  const correctAnswer = body();
  let message;
  if (answer == correctAnswer) {
    message = 'Correct!';
  } else {
    message = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's tray again, ${name}!`;
  }
  return message;
};

export const getOperation = () => '+-*'[Math.floor(Math.random() * 3)];
