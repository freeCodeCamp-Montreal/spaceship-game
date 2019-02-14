/* global document */
// Holds global elements
const g = {};

/**
 * Checks for arrow presses and spoce bar key presses
 * and handles them accordingly.
 * @param {KeyboardEvent} event - Keypress event received
 */
function checkArrowPress(event) {
  // We could also use event.code for more readable cases
  switch (event.keyCode) {
    case 38: // up
      event.preventDefault();
      g.Ship.moveUp();
      break;
    case 40: // down
      event.preventDefault();
      g.Ship.moveDown();
      break;
    case 32: // space for shooting
      event.preventDefault();
      g.Ship.shoot();
      break;
    default:
      break;
  }
}

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
  g.start = document.querySelector('.start');
  g.stop = document.querySelector('.stop');
  g.space = document.querySelector('.space');

  // Create a new instance of our ship
  g.Ship = new Ship(g.space);

  // Arrow function that handles a game over state
  g.gameOver = (interval) => {
    document.querySelector('.game-over-overlay').style.display = 'block';
    document.removeEventListener('keydown', checkArrowPress);
    // This stop the creation of baddies, but it kinda looks fun when disabled :D
    clearInterval(g.monsterInterval);
    Creature.stop(interval);
  };

  // Event listeners will listen for specific events (keydown)
  // and run the function given
  document.addEventListener('keydown', checkArrowPress);

  // creates monsters every 3000ms
  g.monsterInterval = setInterval(() => {
    new Creature(g.Ship, g.space);
  }, 3000);

  // For testing purposes, baddy spawns in front of the ship
  // g.baddy = new Baddies(g.Ship, g.space);
  // g.baddy.move();
}

// Run the start function
start();
