// import Triangle from './../src/triangle.js';

// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });

import { Player } from "./../src/scripts.js";

describe('Player', () => {

  let name;
  let variable;
  let player;

  beforeEach(() => {
    name = "herbert";
    variable = 0;
    player = new Player(name, variable);
  });

  test('should take two arguments and have three key:value pairs', () => {
    expect(typeof player.currentTotal === undefined);
    expect(player.name.includes("herbert"));
    expect(player.totalPts === 0);
  });

  test ('should take two intergers and return a random number between 1-6', () => {
    expect(player.diceRoll > 0 || player.diceRoll <= 6);
  });

});