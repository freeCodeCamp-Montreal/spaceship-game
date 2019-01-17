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

  top() {
    return window.parseInt(this.pew.style.top);
  }

  bottom() {
    return this.top() + 10;
  }

  left() {
    return window.parseInt(this.pew.style.left);
  }

  right() {
    return this.left() + 60;
  }

  isMonsterHit(monster) {
    return monster.isHit(this);
  }

  move() {
    const interval = setInterval(() => {
      const x = window.parseInt(this.pew.style.left);
      const pewWidth = window.parseInt(window.getComputedStyle(this.pew).getPropertyValue('width'));

      g.baddies.forEach( m => {
        console.log(`monster at: ${m.top()}, ${m.left()} was`, this.isMonsterHit(m) ? 'hit' : 'not hit');
      //   if (m.isHit(this)) {
      //     console.log('it was hit', m, this);
      //   }
      });

      if (x + pewWidth >= this.space.offsetWidth) {
        this.pew.remove();
        clearInterval(interval);
        return;
      }

      this.pew.style.left = `${x + 8}px`;
    }, 10);
  }
};
