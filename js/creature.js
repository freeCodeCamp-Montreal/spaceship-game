/* global document window g */
/**
 * The creatures our ship will shoot at 👽
 */
class Creature {
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
    this.move();
  }

  /**
   * Handles the movement for a creature as well as what happens
   * when it moves to a spot where there is a ship.
   */
  move() {
    this.baddyStepInterval = setInterval(() => {
      // If the creature died, remove from the DOM and clear our interval
      if (Array.from(this.creature.classList).includes('baddie-died')) {
        this.creature.remove();
        window.clearInterval(this.baddyStepInterval);
      }

      const x = this.left();
      const y = this.top();

      // Hit box (y axis) where the creature would hit our ship
      const hitBoxMax = this.ship.height + this.ship.top();
      const hitBoxMin = this.ship.top() - this.ship.height;

      // 80 represents the x position of our ship
      if (x <= 80 && y < hitBoxMax && y > hitBoxMin) {
        // this, if it worked, would only stop the current interval, all other badies will continue moving
        if (this.ship.lives === 0) {
          g.gameOver(this.baddyStepInterval);
        } else {
          this.ship.loseLife();
          this.creature.src = 'static/boom.svg';
          this.creature.classList.add('baddie-died');
          console.log(this.ship.lives);
        }
      }

      this.creature.style.left = `${x - ((this.step + 1) * 2)}px`;
    }, 100);
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

  isShipHit(ship) {
    return this.left() < ship.right() &&
      this.right() > ship.left() &&
      this.top() < ship.bottom() &&
      this.bottom() > ship.top();
  }
};
