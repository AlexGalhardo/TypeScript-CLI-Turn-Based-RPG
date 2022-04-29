"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameStatistics_1 = __importDefault(require("../classes/GameStatistics"));
const GLOBAL_1 = require("../GLOBAL");
const main_1 = require("../main");
const chalk_1 = __importDefault(require("chalk"));
function npcRound(player) {
    let totalPrice = 0;
    let continueInNPCRound = true;
    while (continueInNPCRound) {
        console.log(chalk_1.default.bold("\n\t ---> NPC ROUND <--- "));
        console.log(chalk_1.default.bold.yellow(`\t Currently Gold Coins: ${player.currentlyGoldCoins}`));
        console.log(`\t Enter [1] --> Buy Health Potions [${GLOBAL_1.HEALTH_POTION_PRICE} gold coins each]`);
        console.log(`\t Enter [2] --> Buy Mana Potions [${GLOBAL_1.MANA_POTION_PRICE} gold coins each]`);
        console.log("\t Enter [0] --> Bye NPC [Go Next Round]");
        const npcOption = Number((0, main_1.userInput)(chalk_1.default.bold.green("\t Option: ")));
        while (true) {
            if (npcOption === 1) {
                console.log(`\n\t How many Health Potions you want dear ${player.name} ?`);
                console.log("\t Enter [0] --> Go back.");
                const healthPotions = Number((0, main_1.userInput)(chalk_1.default.bold.green("\t I want to buy: ")));
                if (healthPotions === 0)
                    break;
                totalPrice = healthPotions * GLOBAL_1.HEALTH_POTION_PRICE;
                console.log(chalk_1.default.bold(`\t Confirm: BUY ${healthPotions} Health Potions for ${totalPrice} gold coins?`));
                console.log("\t Enter [1] --> Yes");
                console.log("\t Enter Other --> No");
                const confirmTransaction = Number((0, main_1.userInput)(chalk_1.default.bold.green("\t Confirm: ")));
                if (confirmTransaction === 1) {
                    if (totalPrice <= player.currentlyGoldCoins) {
                        GameStatistics_1.default.totalHealthPotionsBought += healthPotions;
                        player.usedGoldCoinsInNPC(totalPrice);
                        player.addHealthPotions(healthPotions);
                        console.log(chalk_1.default.green(`\n\t You now have: ${player.currentlyHealthPotions} Health Potions!`));
                        break;
                    }
                    else {
                        console.log(chalk_1.default.bold.red("\n\t YOU DONT HAVE SUFFICIENT GOLD COINS!"));
                        break;
                    }
                }
            }
            else if (npcOption === 2) {
                console.log(`\n\t How many Mana Potions you wanna ${player.name} ?`);
                console.log("\t Enter [0] --> Go back.");
                const manaPotions = Number((0, main_1.userInput)(chalk_1.default.bold.green("\t I want to buy: ")));
                if (manaPotions === 0)
                    break;
                totalPrice = manaPotions * GLOBAL_1.MANA_POTION_PRICE;
                console.log(chalk_1.default.bold(`\t Confirm: BUY ${manaPotions} Mana Potions for ${totalPrice} gold coins?`));
                console.log("\t Enter [1] --> Yes");
                console.log("\t Enter Other --> No");
                const confirmTransaction = Number((0, main_1.userInput)(chalk_1.default.bold.green("\t Confirm: ")));
                if (confirmTransaction === 1) {
                    if (totalPrice <= player.currentlyGoldCoins) {
                        GameStatistics_1.default.totalManaPotionsBought += manaPotions;
                        player.usedGoldCoinsInNPC(totalPrice);
                        player.addManaPotions(manaPotions);
                        console.log(chalk_1.default.green(`\n\t You now have: ${player.currentlyManaPotions} Mana Potions!`));
                        break;
                    }
                    else {
                        console.log(chalk_1.default.bold.red("\n\t YOU DONT HAVE SUFFICIENT GOLD COINS!"));
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
exports.default = npcRound;
