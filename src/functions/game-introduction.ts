import chalk from "chalk";

export default function gameIntroduction(): void {
	console.log(chalk.bold.blue("\n\nWELCOME TO TYPESCRIPT CLI TURN BASED RPG!"));
	console.log(chalk.bold("\nAuthor: Alex Galhardo <alexgalhardo.com>"));
	console.log(chalk.bold("\nSource Code: https://github.com/AlexGalhardo/TypeScript-CLI-Turn-Based-RPG"));
}
