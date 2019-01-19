/* global document */

/**
 * Class which receives a ship node and
 * functions to control movement and shooting
 */
class Ship {
  // ship node
  constructor(space) {
    this.space = space;
    this.ship = document.querySelector('.ship');
    this.spaceHeight = space.offsetHeight;
    this.height = this.ship.height;
    this.width = this.ship.width;
  }
}

module.exports = Ship;
