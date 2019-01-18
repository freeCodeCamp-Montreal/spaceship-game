/* global document */
import Ship from './js/ship.js';

// Holds global elements
const g = {};

/**
 * This is the function that runs first and starts our game. It
 * assigns our nodes to our global object for ease of use, sets
 * the event listeners, generates creatures and watches for our
 * game over condition.
 */
function start() {
  // Assign values (which happen to be nodes) to these global keys
  // querySelector returns the first element that is a descendant of
  // the node that matches selectors.
  g.space = document.querySelector('.space');

  // Create a new instance of our ship
  g.Ship = new Ship(g.space);
}

// Run the start function
start();
