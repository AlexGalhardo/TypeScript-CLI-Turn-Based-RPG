"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const startGame_1 = __importDefault(require("./functions/startGame"));
exports.userInput = prompt_sync_1.default({ sigint: true });
startGame_1.default();
