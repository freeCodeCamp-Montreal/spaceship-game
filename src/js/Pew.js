/* global document window */
/**
 * Pew pew node that our ship uses to kill alien blobs
 */
module.exports = class Pew {
  constructor(x, y) {
    this.pew = document.createElement('img');
    this.pew.src = 'static/Pew.svg';
    this.pew.className = 'pew';

    this.pew.style.left = x;
    this.pew.style.top = y;
  }

  move() {
    const interval = setInterval(() => {
      const x = parseInt(this.pew.style.left);

      if (x >= window.innerWidth - 110) {
        this.pew.remove();
        clearInterval(interval);
        return;
      }

      this.pew.style.left = `${x + 4}px`;
    }, 10);
  }
};
