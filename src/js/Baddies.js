/* global document window g */
/**
 * The creatures our ship will shoot at
 */
module.exports = class Baddies {
  constructor(space) {
    this.space = space;
    this.height = 60;
    this.width = 60;
    this.creature = document.createElement('img');
    this.creature.src = 'static/Creature2.svg';
    this.creature.className = 'baddie baddie-fades';
    this.creature.id = `baddie-${g.baddies.length + 1}`
    const baddiesX = `${space.offsetWidth}px`;
    const baddiesY = `${Math.floor(Math.random() * space.offsetHeight)}px`;
    this.step = Math.floor(Math.random() * 4); //random number between 0 - 3
    this.creature.style.left = baddiesX;
    this.creature.style.top = baddiesY;

    this.space.appendChild(this.creature);
    this.move();
  }

  move() {
    const interval = setInterval(() => {
      const x = window.parseInt(this.creature.style.left);

      if (x <= 0) {
        this.creature.remove();
        clearInterval(interval);
        return;
      }

      this.creature.style.left = `${x - ((this.step + 1) * 2)}px`;
    }, 100);
  }

  top() {
    return window.parseInt(this.creature.style.top);
  }

  bottom() {
    return this.top() + 60;
  }

  left() {
    return window.parseInt(this.creature.style.left);
  }

  right() {
    return this.left() + 60;
  }

  isHit(laser) {
    return laser.left() < this.right() &&
        laser.right() > this.left() &&
        laser.top() < this.bottom() &&
        laser.bottom() > this.top();
  }
};
