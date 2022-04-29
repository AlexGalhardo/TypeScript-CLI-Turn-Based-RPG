import Character from "../classes/Character";
import GameStatistics from "../classes/GameStatistics";
import { HEALTH_POTION_PRICE, MANA_POTION_PRICE } from "../GLOBAL";
import { userInput } from "../main";
import chalk from 'chalk';

export default function npcRound(player: Character) {

    let totalPrice = 0;

    let continueInNPCRound = true;

    while (continueInNPCRound) {

        console.log(chalk.bold("\n\t ---> NPC ROUND <--- "));
        console.log(chalk.bold.yellow(`\t Currently Gold Coins: ${player.currentlyGoldCoins}`));
        console.log(`\t Enter [1] --> Buy Health Potions [${HEALTH_POTION_PRICE} gold coins each]`);
        console.log(`\t Enter [2] --> Buy Mana Potions [${MANA_POTION_PRICE} gold coins each]`);
        console.log("\t Enter [0] --> Bye NPC [Go Next Round]");

        const npcOption = Number(userInput(chalk.bold.green("\t Option: ")));

        while (true) {

            if (npcOption === 1) {

                console.log(`\n\t How many Health Potions you want dear ${player.name} ?`);
                console.log("\t Enter [0] --> Go back.");

                const healthPotions = Number(userInput(chalk.bold.green("\t I want to buy: ")));

                if (healthPotions === 0) break;

                totalPrice = healthPotions * HEALTH_POTION_PRICE;

                console.log(chalk.bold(`\t Confirm: BUY ${healthPotions} Health Potions for ${totalPrice} gold coins?`));

                console.log("\t Enter [1] --> Yes");
                console.log("\t Enter Other --> No");

                const confirmTransaction = Number(userInput(chalk.bold.green("\t Confirm: ")));

                if (confirmTransaction === 1) {

                    if (totalPrice <= player.currentlyGoldCoins) {
                        GameStatistics.totalHealthPotionsBought += healthPotions;
                        player.usedGoldCoinsInNPC(totalPrice);
                        player.addHealthPotions(healthPotions);

                        console.log(chalk.green(`\n\t You now have: ${player.currentlyHealthPotions} Health Potions!`));
                        break;
                    } else {
                        console.log(chalk.bold.red("\n\t YOU DONT HAVE SUFFICIENT GOLD COINS!"));
                        break;
                    }
                }
            }
            else if (npcOption === 2) {

                console.log(`\n\t How many Mana Potions you wanna ${player.name} ?`);
                console.log("\t Enter [0] --> Go back.");

                const manaPotions = Number(userInput(chalk.bold.green("\t I want to buy: ")));

                if (manaPotions === 0) break;

                totalPrice = manaPotions * MANA_POTION_PRICE;

                console.log(chalk.bold(`\t Confirm: BUY ${manaPotions} Mana Potions for ${totalPrice} gold coins?`));

                console.log("\t Enter [1] --> Yes");
                console.log("\t Enter Other --> No");

                const confirmTransaction = Number(userInput(chalk.bold.green("\t Confirm: ")));

                if (confirmTransaction === 1) {

                    if (totalPrice <= player.currentlyGoldCoins) {
                        GameStatistics.totalManaPotionsBought += manaPotions;
                        player.usedGoldCoinsInNPC(totalPrice);
                        player.addManaPotions(manaPotions);

                        console.log(chalk.green(`\n\t You now have: ${player.currentlyManaPotions} Mana Potions!`));
                        break;
                    } else {
                        console.log(chalk.bold.red("\n\t YOU DONT HAVE SUFFICIENT GOLD COINS!"));
                        break;
                    }
                }
            }
            else if (npcOption === 0) {
                continueInNPCRound = false;
                break;
            }
            else {
                break;
            }
        }
    }
}