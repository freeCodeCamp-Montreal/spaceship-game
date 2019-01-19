/* global document window */
/**
 * The creatures our ship will shoot at 👽
 */
module.exports = class Creature {
  /**
   * @param {Ship} ship
   * @param {Element} space
   */
  constructor(ship, space) {
    this.space = space;
    this.ship = ship;
    // Height and width of our creature (taken from image)
    this.height = 60;
    this.width = 60;
    // Create element that represents our creature
    this.creature = document.createElement('img');
    this.creature.src = 'static/Creature.svg';
    // Assign them the baddie and baddie-fades classes
    this.creature.className = 'baddie baddie-fades';
    // How fast the creature moves
    this.step = 4; // Math.floor(Math.random() * 4); // random number between 0 - 3
    // Creature's position from the right (all the way to the right of the space)
    this.creature.style.left = '350px';
    // Creature's position from the top
    this.creature.style.top = `${100}px`; // `${Math.floor(Math.random() * space.offsetHeight)}px`;

    // Add the creature we just made to our game
    this.space.appendChild(this.creature);
    // Make it move to the left
    // this.move();
  }

  static stop(interval) {
    window.clearInterval(interval);
  }

  top() {
    return window.parseInt(window.getComputedStyle(this.creature).getPropertyValue('top'));
  }

  bottom() {
    return this.top() + 60;
  }

  left() {
    return window.parseInt(window.getComputedStyle(this.creature).getPropertyValue('left'));
  }

  right() {
    return this.left() + 60;
  }
};
