/* global document window */
/**
 * The creatures our ship will shoot at
 */
module.exports = class Baddies {
  constructor() {
    this.creature = document.createElement('img');
    this.creature.src = 'static/Creature.svg';
    this.creature.className = '.creature';
    this.creature.style.left = `${window.innerWidth}px`;
    this.creature.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
  }

  move() {
    const interval = setInterval(() => {
      const x = parseInt(this.creature.style.left);

      if (x >= 0) {
        this.creature.remove();
        clearInterval(interval);
        return;
      }

      this.creature.style.left = `${x - 4}px`;
    }, 10);
  }
};
