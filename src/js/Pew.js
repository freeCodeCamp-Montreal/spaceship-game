/* global document window */
/**
 * Pew pew node that our ship uses to kill alien blobs
 */
module.exports = class Pew {
  constructor(x, y, ship, space) {
    this.pew = document.createElement('img');
    this.pew.src = 'static/Pew.svg';
    this.pew.className = 'pew';
    this.ship = ship;
    this.space = space;

    const pewsX = `${20 + this.ship.width}px`;
    const pewsY = `${(window.parseInt(y) + (this.ship.height / 2)) - 2}px`;
    console.log(`pews fire from x:${pewsX} and y:${pewsY}`);
    this.pew.style.left = pewsX;
    this.pew.style.top = pewsY;
  }

  move() {
    const interval = setInterval(() => {
      const x = window.parseInt(this.pew.style.left);

      if (x + 50 >= this.space.offsetWidth) {
        this.pew.remove();
        clearInterval(interval);
        return;
      }

      this.pew.style.left = `${x + 1}px`;
    }, 10);
  }
};
