import Character from "../abstract-classes/Character";
import GameStatistics from "../utils/game-statistics";
import { HEALTH_POTION_PRICE, MANA_POTION_PRICE } from "../envs";
import { userInput } from "../start";
import chalk from "chalk";

export default function npcRound(player: Character) {
    let totalPrice = 0;

    let continueInNPCRound = true;

    while (continueInNPCRound) {
        console.log(chalk.bold("\n---> NPC ROUND <--- "));
        console.log(chalk.bold.yellow(`Currently Gold Coins: ${player.currentlyGoldCoins}`));
        console.log(`Enter [1] --> Buy Health Potions [${HEALTH_POTION_PRICE} gold coins each]`);
        console.log(`Enter [2] --> Buy Mana Potions [${MANA_POTION_PRICE} gold coins each]`);
        console.log("Enter [0] --> Bye NPC [Go Next Round]");

        const npcOption = Number(userInput(chalk.bold.green("Option: ")));

        while (true) {
            if (npcOption === 1) {
                console.log(`\nHow many Health Potions you want dear ${player.name} ?`);
                console.log("Enter [0] --> Go back.");

                const healthPotions = Number(userInput(chalk.bold.green("I want to buy: ")));

                if (healthPotions === 0) break;

                totalPrice = healthPotions * HEALTH_POTION_PRICE;

                console.log(chalk.bold(`Confirm: BUY ${healthPotions} Health Potions for ${totalPrice} gold coins?`));

                console.log("Enter [1] --> Yes");
                console.log("Enter Other --> No");

                const confirmTransaction = Number(userInput(chalk.bold.green("Confirm: ")));

                if (confirmTransaction === 1) {
                    if (totalPrice <= player.currentlyGoldCoins) {
                        GameStatistics.totalHealthPotionsBought += healthPotions;
                        player.usedGoldCoinsInNPC(totalPrice);
                        player.addHealthPotions(healthPotions);

                        console.log(chalk.green(`\nYou now have: ${player.currentlyHealthPotions} Health Potions!`));
                        break;
                    } else {
                        console.log(chalk.bold.red("\nYOU DONT HAVE SUFFICIENT GOLD COINS!"));
                        break;
                    }
                }
            } else if (npcOption === 2) {
                console.log(`\nHow many Mana Potions you wanna ${player.name} ?`);
                console.log("Enter [0] --> Go back.");

                const manaPotions = Number(userInput(chalk.bold.green("I want to buy: ")));

                if (manaPotions === 0) break;

                totalPrice = manaPotions * MANA_POTION_PRICE;

                console.log(chalk.bold(`Confirm: BUY ${manaPotions} Mana Potions for ${totalPrice} gold coins?`));

                console.log("Enter [1] --> Yes");
                console.log("Enter Other --> No");

                const confirmTransaction = Number(userInput(chalk.bold.green("Confirm: ")));

                if (confirmTransaction === 1) {
                    if (totalPrice <= player.currentlyGoldCoins) {
                        GameStatistics.totalManaPotionsBought += manaPotions;
                        player.usedGoldCoinsInNPC(totalPrice);
                        player.addManaPotions(manaPotions);

                        console.log(chalk.green(`\nYou now have: ${player.currentlyManaPotions} Mana Potions!`));
                        break;
                    } else {
                        console.log(chalk.bold.red("\nYOU DONT HAVE SUFFICIENT GOLD COINS!"));
                        break;
                    }
                }
            } else if (npcOption === 0) {
                continueInNPCRound = false;
                break;
            } else {
                break;
            }
        }
    }
}
