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

  test('should take two arguments and have three key:value pairs', () => {
    const name = "herbert";
    const variable = 0;
    const player = new Player(name, variable);
    expect(typeof player.currentTotal === undefined);
    expect(player.name.includes("herbert"));
    expect(player.totalPts === 0);
  });
});