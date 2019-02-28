/* eslint-disable radix */
/* global document Pew */

/**
 * Class which receives a ship node and
 * functions to control movement and shooting
 */
class Ship {
  /**
   * Create attributes and assign default values to them
   * @param {Element} space
   */
  constructor(space) {
    // How much px our ship will move up and down. Feel free to change this
    this.step = 8;
    // Assign a given space element to our class' attribute
    this.space = space;
    // Determine the height of our space
    this.spaceHeight = space.offsetHeight;
    // Select and assign a ship element
    this.ship = document.querySelector('.ship');
    // This is necessary to initialize top to a number
    this.ship.style.top = '0px';
    this.height = this.ship.height;
    this.width = this.ship.width;
    // Default the ship to have 3 lives. Not useful yet
    this.lives = 3;

    console.log('Height of space ⭐', space.offsetHeight);
  }

  moveUp() {
    const position = this.top();

    // If it's at the top, don't move the ship
    if (position <= 0) return;

    this.ship.style.top = `${position - this.step}px`;
  }

  moveDown() {
    const position = this.top();

    if (position >= this.spaceHeight - this.height) return;

    this.ship.style.top = `${position + this.step}px`;
  }

  shoot() {
    const x = this.left();
    const y = this.top();
    console.log('x:', x, 'y:', y);
    const newPew = new Pew(x, y, this, this.space);

    this.space.appendChild(newPew.pew);
    newPew.move();
  }

  /**
   * Get the top position of the ship. There are different ways to go about this,
   * so for fun, here we use the computed style's top property (string), remove
   * the px part of it and coerce it into a Number data type.
   */
  top() {
    return parseInt(this.ship.style.top);
  }

  bottom() {
    // 60 is the height of our ship which is hardcoded for simplicity
    return this.top() + 60;
  }

  left() {
    // We don't really use this method other than for debugging so don't worry about
    // it too much. The || part says if the left side is falsy, use 0
    return parseInt(this.ship.style.left || 0);
  }

  right() {
    // 60 is the width of our ship which is hardcoded for simplicity
    return this.left() + 60;
  }
}
