import Character from "../classes/Character";
import npcRound from "./npcRound";
import chalk from "chalk";

export default function afterFight(player: Character, monsterName: string) {
    console.log(chalk.bold.cyan(`\n\n\t ....PLAYER DEFEATED ${monsterName}!\n`));
    npcRound(player);
    console.log(chalk.bold("\n\t --------> FIGHT ROUND <--------"));
}
