/* eslint-disable prettier/prettier */
import { userInput } from "../main";
import createPlayerCharacter from "./createPlayerCharacter";
import gameIntroduction from "./gameIntroduction";
import startGameplay from "./startGameplay";


export default async function startGame() {

    gameIntroduction();

    while (true) {

        console.log("\n");

        const player = createPlayerCharacter();

        startGameplay(player);

        console.log("\n\n\t Do you wanna play again?");
        console.log("\t Enter [1] --> YES");
        console.log("\t Enter [2] --> NO");
        const playAgain = Number(userInput("\t Play again: "));

        if (playAgain === 1) {
            continue;
        } else {
            break;
        }
    }

    console.log("\n\n\t Bye Bye. Come Back Later! :D\n\n");
}
