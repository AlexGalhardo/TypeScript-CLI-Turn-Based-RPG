import Character from "../abstract-classes/Character";
import npcRound from "./npc-round";
import chalk from "chalk";

export default function afterFight(player: Character, monsterName: string) {
    console.log(chalk.bold.cyan(`\n\n....PLAYER DEFEATED ${monsterName}!\n`));
    npcRound(player);
    console.log(chalk.bold("\n--------> FIGHT ROUND <--------"));
}
