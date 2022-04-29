"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInput = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const startGame_1 = __importDefault(require("./functions/startGame"));
exports.userInput = (0, prompt_sync_1.default)({ sigint: true });
(0, startGame_1.default)();
