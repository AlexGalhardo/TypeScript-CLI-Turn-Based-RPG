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
    let continueNPC = true;
    while (continueNPC) {
        console.log(chalk_1.default.bold("\n\t ---> NPC ROUND <--- "));
        console.log(chalk_1.default.bold.yellow(`\t Currently Gold Coins: ${player.currentlyGoldCoins}`));
        console.log(`\t Enter [1] --> Buy Health Potions [${GLOBAL_1.HEALTH_POTION_PRICE} gold coins each]`);
        console.log(`\t Enter [2] --> Buy Mana Potions [${GLOBAL_1.MANA_POTION_PRICE} gold coins each]`);
        console.log("\t Enter [0] --> Bye NPC [Go Next Round]");
        const npcOption = Number(main_1.userInput("\t Option: "));
        while (true) {
            if (npcOption === 1) {
                console.log(`\n\t How many Health Potions you want dear ${player.name} ?`);
                console.log("\t Enter [0] --> Go back.");
                const healthPotions = Number(main_1.userInput("\t I want to buy: "));
                if (healthPotions === 0)
                    break;
                totalPrice = healthPotions * GLOBAL_1.HEALTH_POTION_PRICE;
                console.log(`\t Confirm: [${healthPotions}] Health Potions for [${totalPrice}] Gold Coins?`);
                console.log("\t Enter [1] --> Yes");
                console.log("\t Enter Other --> No");
                const confirm = Number(main_1.userInput("\t Confirm: "));
                if (confirm === 1) {
                    if (totalPrice <= player.currentlyGoldCoins) {
                        GameStatistics_1.default.totalHealthPotionsBought += healthPotions;
                        player.usedGoldCoinsInNPC(totalPrice);
                        player.addHealthPotions(healthPotions);
                        console.log(`\n\t Currently Cold Coins: ${player.currentlyGoldCoins}`);
                        console.log(`\t Currently Health Potions: ${player.currentlyHealthPotions}`);
                        break;
                    }
                    else {
                        console.log("\n\t YOU DONT HAVE SUFFICIENT GOLD COINS!");
                        break;
                    }
                }
            }
            else if (npcOption === 2) {
                console.log(`\n\t How many Mana Potions you wanna ${player.name} ?`);
                console.log("\t Enter [0] --> Go back.");
                const manaPotions = Number(main_1.userInput("\t I want to buy: "));
                if (manaPotions === 0)
                    break;
                totalPrice = manaPotions * GLOBAL_1.MANA_POTION_PRICE;
                console.log(`\t Confirm: ${manaPotions} for ${totalPrice} gold coins?`);
                console.log("\t Enter [1] --> Yes");
                console.log("\t Enter Other --> No");
                const confirmTransaction = Number(main_1.userInput("\t Confirm: "));
                if (confirmTransaction === 1) {
                    if (totalPrice <= player.currentlyGoldCoins) {
                        GameStatistics_1.default.totalManaPotionsBought += manaPotions;
                        player.usedGoldCoinsInNPC(totalPrice);
                        player.addManaPotions(manaPotions);
                        console.log(`\t Currently Cold Coins: ${player.currentlyGoldCoins}`);
                        console.log(`\t Currently Mana Potions: ${player.currentlyManaPotions}`);
                        break;
                    }
                    else {
                        console.log("\n\t YOU DONT HAVE SUFFICIENT GOLD COINS!");
                        break;
                    }
                }
            }
            else if (npcOption === 0) {
                continueNPC = false;
                break;
            }
            else {
                console.log("\t Enter a valid option!");
                break;
            }
        }
    }
}
exports.default = npcRound;
