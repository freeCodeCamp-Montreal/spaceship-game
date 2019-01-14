/* global document Ship */
import Creature from './js/Creature.js';

const g = {};
const state = {
  lives: 3,
  score: 0,
};

function checkArrowPress(event) {
  switch (event.keyCode) {
    case 38: // up
      g.Ship.moveUp();
      break;
    case 40: // down
      g.Ship.moveDown();
      break;
    case 37: // left
      break;
    case 39: // right
      break;
    case 32: // space for shooting
      g.Ship.shoot(g.space);
      break;
    default:
      break;
  }
}

function start() {
  g.start = document.querySelector('.start');
  g.stop = document.querySelector('.stop');
  g.space = document.querySelector('.space');
  g.Ship = new Ship(document.querySelector('.ship'));

  document.addEventListener('keydown', checkArrowPress);

  const alien = new Creature();
  debugger;
  g.space.appendChild(alien.creature);
  console.log(alien.creature);
  // alien.move();
}

start();
