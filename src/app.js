import './css/style.css';
import './src/app.js';

import Game, {
  GameSavingData,
  readGameSaving as loadGame,
  writeGameSaving as saveGame,
} from './js/modules/game';

console.log("app worked");

const game = new Game();
game.start();
