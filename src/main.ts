import promptSync from "prompt-sync";

export const userInput = promptSync({ sigint: true });

class Warrior extends Character {
    constructor(playerName) {
        super(
            "Warrior",
            playerName,
            NORMAL_MIN_ATTACK,
            NORMAL_MAX_ATTACK,
            WARRIOR_ADD_HEALTH_PER_LEVEL,
            WARRIOR_ADD_MANA_PER_LEVEL
        );
    }
}

class Mage extends Character {
    constructor(playerName) {
        super(
            "Mage",
            playerName,
            NORMAL_MIN_ATTACK,
            NORMAL_MAX_ATTACK,
            MAGE_ADD_HEALTH_PER_LEVEL,
            MAGE_ADD_MANA_PER_LEVEL
        );
    }
}
class Archer extends Character {
    constructor(playerName) {
        super(
            "Archer",
            playerName,
            NORMAL_MIN_ATTACK,
            NORMAL_MAX_ATTACK,
            ARCHER_ADD_HEALTH_PER_LEVEL,
            ARCHER_ADD_MANA_PER_LEVEL
        );
    }
}

class Monster {
    constructor(
        name,
        healthPoints,
        minAttack,
        maxAttack,
        experienceForKill,
        lootMax,
        lootMin
    ) {
        this.healthPoints = healthPoints;
        this.minAttack = minAttack;
        this.maxAttack = maxAttack;
        this.name = name;
        this.experienceForKill = experienceForKill;
        this.lootAfterKill = Math.floor(Math.random() * lootMax) + lootMin;
    }

    isDead() {
        return this.healthPoints <= 0;
    }

    attack() {
        return Math.floor(Math.random() * this.maxAttack) + this.minAttack;
    }
}
class Orc extends Monster {
    constructor() {
        super("Orc", 5, 15, 100, 35, 70);
    }
}
class Dragon extends Monster {
    constructor() {
        super("Dragon", 25, 75, 100, 50, 200);
    }
}
class Ferumbras extends Monster {
    constructor() {
        super("Ferumbras", 50, 200, 100, 200, 500);
    }
}

function gameIntroduction() {
    console.log("\n\n\t Welcome to JavaScript CLI RPG!");
    console.log(
        "\n\t Made for you fun by: Alex Galhardo <aleexgvieira@gmail.com> :D"
    );
    console.log(
        "\n\t Source Code: https://github.com/AlexGalhardo/JavaScript-CLI-RPG"
    );
}

function createPlayerCharacter() {
    const playerName = String(userInput("\t Enter your character name: "));

    console.log("\n\n\t These are the vocations you can choose to play: ");
    console.log(
        "\n\t Enter [1] --> Warrior [add 75 HP / 25 MP points per level]"
    );
    console.log("\n\t Enter [2] --> Mage [add 25 HP / 75 MP points per level]");
    console.log(
        "\n\t Enter [3] --> Archer [add 50 HP / 50 MP points per level]\n"
    );

    let playerVocationOption = null;

    while (
        isNaN(playerVocationOption) ||
    playerVocationOption < 1 ||
    playerVocationOption > 3
    ) {
        playerVocationOption = Number(
            userInput("\t Choose your character vocation [Enter 1, 2 or 3]: ")
        );
    }

    if (playerVocationOption === 1) {
        return new Warrior(playerName);
    }
    if (playerVocationOption === 2) {
        return new Mage(playerName);
    }
    return new Archer(playerName);
}

function fightMonster(player, monster) {
    while (true) {
        player.getCharacterRoundStatus();
        monster.getMonsterRoundStatus();

        playerAction = Player_Action(Player);

        Round_Status_Print();

        if (playerAction === 0) {
            continue;
        } else {
            if (playerAction == -1) {
                // PLAYER USE NORMAL ATTACK IN MONSTER
                GameStatistics.totalNormalAttacksUsed += 1;
                GameStatistics.totalDamageToMonsters += damageToMonster;
                monster.takeDamage(player.getNormalAttack);
            } else if (playerAction === 2) {
                // PLAYER USE HEALTH POTION TO REGENERATE LIFE
                player.useHealthPotion();
            } else if (playerAction === 3) {
                // PLAYER USE MANA POTION TO REGENERATE Mana
                player.useManaPotion();
            }
            /* } else if (playerAction === 4){
GameStatistics.totalSpellsUsed += 1
monster.takeDamage(player.useLightSpell())
} else if (playerAction === 5){
GameStatistics.totalSpellsUsed += 1
monster.takeDamage(player.useMediumSpell())
} else {
GameStatistics.totalSpellsUsed += 1
monster.takeDamage(player.useStrongSpell())
} */

            // Monster attack player
            player.takeDamage(monster.attack());

            // Verify if Player or Monster is Dead
            if (player.isDead()) {
                // Player still alive?
                return false;
            }
            if (monster.isDead()) {
                player.getLootMonster(monster.lootAfterKill);
                player.getMonsterExperience(monster.experienceForKill);

                console.log(`\t Player Looted: ${monster.lootAfterKill} gold coins!`);
                console.log(
                    `\t Player Received: ${monster.experienceForKill} points of experience!`
                );
                console.log(
                    `\t Player Currently Experience: ${player.currentlyEXP} points experience`
                );

                return true;
            }
            continue;
        }
    }
}

function roundAgainstMonster(playerAlive, player, monster) {
    while (true) {
        playerStillAlive = fightMonster(player, monster);
        if (playerStillAlive) {
            break;
        } else {
            console.log("\n\n\t ... YOU ARE DEAD...");
            console.log("\n\n\t ... GAME OVER ...\n\n");
            playerAlive = false;
            return playerAlive;
        }
    }

    afterFight(player);

    return True;
}

function printNpcRound() {
    totalPrice = 0;
    continueNPC = true;
    while (continueNPC) {
        console.log("\n\t ---> NPC ROUND <--- ");
        console.log(`\t Currently Gold Coins: ${player.currentlyGoldCoins}`);
        console.log("\t Enter [1] --> Buy Health Potions [50 gold coins EACH]");
        console.log("\t Enter [2] --> Buy Mana Potions [50 gold coins EACH]");
        console.log("\t Enter [0] --> ByeBye NPC [NEXT ROUND]");
        npcOption = Number(userInput("\t Option: "));

        while (true) {
            if (npcOption === 1) {
                console.log(
                    `\n\t How many Health Potions you want dear ${Player.getCharacterName()} ?`
                );
                console.log("\t Enter [0] --> Go back.");
                healthPotions = int(input("\t I want to buy: "));
                if (healthPotions == 0) break;

                GameStatistics.totalHealthPotionsBought += healthPotions;
                totalPrice = healthPotions * 50;
                console.log(
                    "\t Confirm: [{}] Health Potions for [{}] Gold Coins?".format(
                        healthPotions,
                        totalPrice
                    )
                );
                console.log("\t Enter [1] --> Yes");
                console.log("\t Enter Other --> No");
                confirm = int(input("\t Confirm: "));
                if (confirm === 1) {
                    if (totalPrice <= player.currentlyGoldCoins) {
                        Player.usedGoldCoinsInNPC(totalPrice);
                        Player.addHealthPotions(healthPotions);
                        console.log(
                            "\t Currently Cold Coins: {}".format(
                                Player.getCharacterCurrentlyGoldCoins()
                            )
                        );
                        console.log(
                            "\t Currently Health Potions: {}".format(
                                Player.getCharacterCurrentlyHealthPotions()
                            )
                        );
                        break;
                    } else {
                        console.log("\n\t YOU DONT HAVE SUFFICIENT GOLD COINS!");
                        break;
                    }
                } else {
                    continue;
                }
            } else if (npcOption === 2) {
                console.log(
                    `\n\t How many Mana Potions you want dear ${Player.getCharacterName()} ?`
                );
                console.log("\t Enter [0] --> Go back.");
                manaPotions = int(input("\t I want to buy: "));

                if (manaPotions === 0) break;

                GameStatistics.totalManaPotionsBought += manaPotions;
                totalPrice = manaPotions * 50;
                console.log(
                    "\t Confirm: {} for {} gold coins?".format(manaPotions, totalPrice)
                );
                console.log("\t Enter [1] --> Yes");
                console.log("\t Enter Other --> No");
                confirmTransaction = int(input("\t Confirm: "));

                if (confirmTransaction === 1) {
                    if (totalPrice <= player.currentlyGoldCoins) {
                        Player.usedGoldCoinsInNPC(totalPrice);
                        Player.addManaPotions(manaPotions);
                        console.log(
                            "\t Currently Cold Coins: {}".format(
                                Player.getCharacterCurrentlyGoldCoins()
                            )
                        );
                        console.log(
                            "\t Currently Mana Potions: {}".format(
                                Player.getCharacterCurrentlyManaPotions()
                            )
                        );
                        break;
                    } else {
                        console.log("\n\t YOU DONT HAVE SUFFICIENT GOLD COINS!");
                        break;
                    }
                } else {
                    continue;
                }
            } else if (npcOption == 0) {
                continueNPC = false;
                break;
            } else {
                console.log("\t Enter a valid option!");
                break;
            }
        }
    }
}

function startGameplay(player) {
    let playerAlive = true;
    printNpcRound(Player);
    printFightRound();

    while (playerAlive) {
        playerAlive = roundAgainstMonster(playerAlive, player, Orc);
        if (playerAlive) {
            playerAlive = roundAgainstMonster(playerAlive, player, Dragon);
            if (playerAlive) {
                playerAlive = roundAgainstMonster(playerAlive, player, Ferumbras);
            } else {
                break;
            }
        } else {
            break;
        }
    }
}

async function startGame() {
    gameIntroduction();

    while (true) {
        console.log("\n");
        const player = await createPlayerCharacter();

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

startGame();
