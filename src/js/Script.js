/* global document Ship */
import Baddies from './js/Baddies.js';

const g = {};
const state = {
  lives: 3,
  score: 0,
};

function checkArrowPress(event) {
  switch (event.keyCode) {
    case 38: // up
      event.preventDefault();
      g.Ship.moveUp();
      break;
    case 40: // down
      event.preventDefault();
      g.Ship.moveDown();
      break;
    case 37: // left
      break;
    case 39: // right
      break;
    case 32: // space for shooting
      event.preventDefault();
      g.Ship.shoot();
      break;
    default:
      break;
  }
}

function start() {
  g.start = document.querySelector('.start');
  g.stop = document.querySelector('.stop');
  g.space = document.querySelector('.space');
  g.Ship = new Ship(g.space);
  g.gameOver = function (interval) {
    document.querySelector('.game-over-overlay').style.display = 'block';
    document.removeEventListener('keydown', checkArrowPress);
    // clearInterval(g.monsterInterval); // This stop the creation of baddies, but it kinda looks fun :D
    Baddies.stop(interval);
  };

  document.addEventListener('keydown', checkArrowPress);

  // creates monsters every 3000ms
  g.monsterInterval = setInterval(() => { new Baddies(g.Ship, g.space); }, 3000);
  // For testing purposes, baddy spawns in front of the ship
  // g.baddy = new Baddies(g.Ship, g.space);
  // g.baddy.move();
}

start();
