/* eslint-disable radix */
/* global document */
/**
 * Pew pew node that our ship uses to kill alien blobs
 */
class Pew {
  constructor(x, y, ship, space) {
    this.pew = document.createElement('img');
    this.pew.src = 'static/Pew.svg';
    this.pew.className = 'pew';
    this.ship = ship;
    this.space = space;

    const pewsX = `${20 + this.ship.width}px`;
    const pewsY = `${(parseInt(y) + (this.ship.height / 2)) - 2}px`;
    console.log(`pews fire from x:${pewsX} and y:${pewsY}`);
    this.pew.style.left = pewsX;
    this.pew.style.top = pewsY;
  }

  top() {
    return parseInt(this.pew.style.top);
  }

  bottom() {
    return this.top() + 10;
  }

  left() {
    return parseInt(this.pew.style.left);
  }

  right() {
    return this.left() + 60;
  }

  isMonsterHit(monster) {
    const topOfMonster = parseInt(monster.style.top);
    const leftOfMonster = parseInt(monster.style.left);
    return this.left() < leftOfMonster + 60
      && this.right() > leftOfMonster
      && this.top() < topOfMonster + 60
      && this.bottom() > topOfMonster;
  }

  move() {
    const interval = setInterval(() => {
      const x = parseInt(this.pew.style.left);
      const pewWidth = parseInt(this.pew.style.width);

      document.querySelectorAll('.baddie').forEach((m) => {
        if (this.isMonsterHit(m)) {
          m.src = 'static/boom.svg';
          m.classList.remove('baddie');
          m.classList.add('baddie-died');
          this.pew.remove();
          clearInterval(interval);
        }
      });

      if (x + pewWidth >= this.space.offsetWidth) {
        this.pew.remove();
        clearInterval(interval);
        return;
      }

      this.pew.style.left = `${x + 8}px`;
    }, 10);
  }
}
