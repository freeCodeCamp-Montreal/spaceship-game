# The ship moves now :clap:

At this point, we've made it so the ship can move up and down using keycodes and event listeners.

<img src="https://user-images.githubusercontent.com/11183523/51428408-4d451a80-1bd1-11e9-8bbd-a46ebad3296f.gif" width=350/>

Notes: https://slides.com/tiffanyle-nguyen/intro-js

## What to do now

We want to make it shoot lasers (we call them pews) :gun:!

- Create a `Pew` class.
- Create the constructor. It should accept a reference to your ship (for positioning) and a reference to your space.
- In your constructor, create an `img` element using `src/static/Pew.svg`.
  - Give it the `pew` class.
  - Append it to your space div
- Create a `move` function, which moves the laser from left to right

## Requirements

- Clone/Download this repository and use this branch

## Usage

### Install dependencies (only once)

Open `index.html` in the modern browser of your choosing from the downloaded/cloned repository.
