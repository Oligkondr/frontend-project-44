import readlineSync from 'readline-sync';

// const name = readlineSync.question('Your name? ');
const greetings = () => {
    console.log('brain-game');
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
};

export {greetings};
