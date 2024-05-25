import promptSync from "prompt-sync";

import startGame from "./functions/start-game";

export const userInput = promptSync({ sigint: true });

startGame();
