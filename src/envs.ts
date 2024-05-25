export const GAME_MODE_EASY = 0.5; // monsters will do 50% less damage to player and has 50% less health
export const GAME_MODE_NORMAL = 1; // monster will do 1x damage to player
export const GAME_MODE_HARD = 1.5; // monster will do 50% more damage to player and has 50% more health

// index 0 = level 0
// index 1 = level 1
// index 2 = need 100 exp to level up to level 2
// index 3 = need 200 exp to level up to level 3
export const EXP_TO_LEVEL_UP: number[] = [0, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

export const PLAYER_START_LIFE_POINTS = 500;
export const PLAYER_START_MANA_POINTS = 100;

export const PLAYER_MIN_ATTACK = 15;
export const PLAYER_MAX_ATTACK = 35;

export const PLAYER_MIN_MAGIC_ATTACK = 50;
export const PLAYER_MAX_MAGIC_ATTACK = 75;

export const PLAYER_WEAK_SPELL_MANA_COST = 100;
export const PLAYER_STRONG_SPELL_MANA_COST = 200;

export const ADD_WARRIOR_ATTACK_PER_LEVEL = 30;
export const ADD_ARCHER_ATTACK_PER_LEVEL = 20;
export const ADD_MAGE_ATTACK_PER_LEVEL = 10;

export const ADD_WARRIOR_MAGIC_ATTACK_PER_LEVEL = 10;
export const ADD_ARCHER_MAGIC_ATTACK_PER_LEVEL = 20;
export const ADD_MAGE_MAGIC_ATTACK_PER_LEVEL = 30;

export const WARRIOR_ADD_HEALTH_PER_LEVEL = 75;
export const WARRIOR_REGENERATE_HEALTH_EACH_ROUND = 15;
export const WARRIOR_ADD_MANA_PER_LEVEL = 25;
export const WARRIOR_REGENERATE_MANA_EACH_ROUND = 5;

export const MAGE_ADD_HEALTH_PER_LEVEL = 25;
export const MAGE_REGENERATE_HEALTH_EACH_ROUND = 5;
export const MAGE_ADD_MANA_PER_LEVEL = 75;
export const MAGE_REGENERATE_MANA_EACH_ROUND = 15;

export const ARCHER_ADD_HEALTH_PER_LEVEL = 50;
export const ARCHER_REGENERATE_HEALTH_EACH_ROUND = 10;
export const ARCHER_ADD_MANA_PER_LEVEL = 50;
export const ARCHER_REGENERATE_MANA_EACH_ROUND = 10;

export const HEALTH_POTION_PRICE = 50;
export const MANA_POTION_PRICE = 50;

export const HEALTH_POTION_MIN_CURE = 75;
export const HEALTH_POTION_MAX_CURE = 125;

export const MANA_POTION_MIN_CURE = 50;
export const MANA_POTION_MAX_CURE = 100;

export const ORC_LIFE_POINTS = 100;
export const ORC_MIN_ATTACK = 15;
export const ORC_MAX_ATTACK = 50;
export const ORC_EXPERIENCE_FOR_KILL = 100;
export const ORC_MIN_LOOT = 25;
export const ORC_MAX_LOOT = 100;

export const WEREWOLF_LIFE_POINTS = 300;
export const WEREWOLF_MIN_ATTACK = 25;
export const WEREWOLF_MAX_ATTACK = 75;
export const WEREWOLF_EXPERIENCE_FOR_KILL = 200;
export const WEREWOLF_MIN_LOOT = 100;
export const WEREWOLF_MAX_LOOT = 150;

export const VAMPIRE_LIFE_POINTS = 500;
export const VAMPIRE_MIN_ATTACK = 35;
export const VAMPIRE_MAX_ATTACK = 125;
export const VAMPIRE_EXPERIENCE_FOR_KILL = 300;
export const VAMPIRE_MIN_LOOT = 70;
export const VAMPIRE_MAX_LOOT = 50;

export const DRAGON_LIFE_POINTS = 1000;
export const DRAGON_MIN_ATTACK = 50;
export const DRAGON_MAX_ATTACK = 200;
export const DRAGON_EXPERIENCE_FOR_KILL = 400;
export const DRAGON_MIN_LOOT = 125;
export const DRAGON_MAX_LOOT = 250;

export const FERUMBRAS_LIFE_POINTS = 3000;
export const FERUMBRAS_MIN_ATTACK = 15;
export const FERUMBRAS_MAX_ATTACK = 100;
export const FERUMBRAS_EXPERIENCE_FOR_KILL = 500;
export const FERUMBRAS_MIN_LOOT = 350;
export const FERUMBRAS_MAX_LOOT = 500;
