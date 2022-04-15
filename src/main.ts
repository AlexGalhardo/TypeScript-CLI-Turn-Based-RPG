import promptSync from 'prompt-sync';

import startGame from './functions/startGame';

export const userInput = promptSync({ sigint: true });

startGame();
