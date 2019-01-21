# You've created a ship
At this point, we've created a ship to navigate and put it in the DOM.

![](https://github.com/sirMerr/spaceship-game/blob/1.creation_vaisseau/src/static/Spaceship.svg)

Notes: https://slides.com/tiffanyle-nguyen/intro-js

## What to do now
In your ship class, create functions that allow you to
* Move it up
* Move it down

In `main.js` (or wherever your main code lives)
* Add an event listener that listens for `keydown`
* Add a function which handles ArrowUp (code: `38`) and ArrowDown (code: `40`) which calls your `Ship`'s `moveUp` and `moveDown` functions

## Requirements
- Node LTS (https://nodejs.org/)

## Usage
### Install dependencies (only once)
```
npm install
```

### Run the game (whenever you want to run it)
```
npm run start
```
To stop the run, use `CTRL + C` or `CMD + C`
