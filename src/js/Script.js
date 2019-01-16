/* global document Ship */
import Creature from './js/Baddies.js';

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
  g.Ship = new Ship(document.querySelector('.ship'), g.space);

  document.addEventListener('keydown', checkArrowPress);

  debugger;
  // const alien = new Baddies();
  // g.space.appendChild(alien.creature);
  // console.log(alien.creature);
  // alien.move();
}

start();
