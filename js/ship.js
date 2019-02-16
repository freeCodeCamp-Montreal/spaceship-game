/* global document window */

/**
 * Class which receives a ship node and
 * functions to control movement and shooting
 */
class Ship {
  // ship node
  constructor(space) {
    this.step = 8;
    this.space = space;
    this.ship = document.querySelector('.ship');
    this.spaceHeight = space.offsetHeight;
    this.height = this.ship.height;
    this.width = this.ship.width;
    this.ship.style.top = "0px";
  }

  getPosition() {
    const top = this.ship.style.top;

    return parseInt(top);
  }

  moveUp() {
    const position = this.getPosition();

    // If it's at the top, don't move the ship
    if (position <= 0) return;

    this.ship.style.top = `${position - this.step}px`;
  }

  moveDown() {
    const position = this.getPosition();

    // If the bottom of the ship is already at the bottom, don't move
    if (position >= this.spaceHeight - this.height) return;

    this.ship.style.top = `${position + this.step}px`;
  }

  top() {
    return window.parseInt(window.getComputedStyle(this.ship).getPropertyValue('top'));
  }

  bottom() {
    return this.top() + 60;
  }

  left() {
    return window.parseInt(window.getComputedStyle(this.ship).getPropertyValue('left'));
  }

  right() {
    return this.left() + 60;
  }
}
