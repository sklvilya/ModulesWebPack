import './css/style.css';

import './js/app.js';
import './script';
import Game, {
  GameSavingData ,
  readGameSaving as loadGame,
  writeGameSaving as saveGame,
} from "./modules/Game";

console.log("app worked");

const game = new Game();
game.start();