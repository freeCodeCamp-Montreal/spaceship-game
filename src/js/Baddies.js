/* global document window g */
/**
 * The creatures our ship will shoot at
 */
module.exports = class Baddies {
  constructor(ship, space) {
    this.space = space;
    this.ship = ship;
    this.height = 60;
    this.width = 60;
    this.creature = document.createElement('img');
    this.creature.src = 'static/Creature2.svg';
    this.creature.className = 'baddie baddie-fades';
    const baddiesX = `${space.offsetWidth}px`;
    const baddiesY = `${Math.floor(Math.random() * space.offsetHeight)}px`;
    this.step = Math.floor(Math.random() * 4); //random number between 0 - 3
    this.creature.style.left = baddiesX;
    this.creature.style.top = baddiesY;

    this.space.appendChild(this.creature);
    this.move();
  }

  move() {
    this.baddyStepInterval = setInterval(() => {
      const x = window.parseInt(this.creature.style.left);

      if (x <= 80) {
        if (Array.from(this.creature.classList).includes('baddie-died')) {
          this.creature.remove();
          window.clearInterval(this.baddyStepInterval);
        } else {
          g.gameOver(this.baddyStepInterval); // this, if it worked, would only stop the current interval, all other badies will continue moving
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
