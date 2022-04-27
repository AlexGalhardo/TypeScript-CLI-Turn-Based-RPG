import GameStatistics from "../classes/GameStatistics";
import { userInput } from "../main";
import createPlayerCharacter from "./createPlayerCharacter";
import gameIntroduction from "./gameIntroduction";
import startGameplay from "./startGameplay";
import chalk from 'chalk';


export default async function startGame() {

    gameIntroduction();

    while (true) {

        console.log("\n");

        const player = createPlayerCharacter();

        startGameplay(player);

        console.log(chalk.bold.yellow('\n\t -------- GAME STATISTICS --------'));
        console.log(`\t Total Gold Coins Looted = ${GameStatistics.totalGoldCoinsLooted}`);
        console.log(`\t Total Gold Coins Used = ${GameStatistics.totalGoldCoinsUsed}`);
        console.log(`\t Total Health Potions Bought = ${GameStatistics.totalHealthPotionsBought}`);
        console.log(`\t Total Mana Potions Bought = ${GameStatistics.totalManaPotionsBought}`);
        console.log(`\t Total Health Potions Used = ${GameStatistics.totalHealthPotionsUsed}`);
        console.log(`\t Total Mana Potions Used = ${GameStatistics.totalManaPotionsUsed}`);
        console.log(`\t Total Normal Attack sUsed = ${GameStatistics.totalNormalAttacksUsed}`);
        console.log(`\t Total Damage Dealt ToMonsters = ${GameStatistics.totalDamageDealtToMonsters}`);
        console.log(`\t Total Damage Taken From Monsters = ${GameStatistics.totalDamageTakenFromMonsters}`);

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

    console.log(`\n\n\t Bye. Come Back Later! :D\n\n`);
}
