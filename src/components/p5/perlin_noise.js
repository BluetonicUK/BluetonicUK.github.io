/* eslint-disable no-else-return */
/* eslint-disable no-lonely-if */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
// import React, { Component } from 'react';
// import { loadableP5 as P5Wrapper } from './loadable';

export default function PerlinNoise(p5) {

  let width;
  let mobileWidth = window.innerWidth - 150;
  let desktopWidth = 500;

  if (window.innerWidth <= 500) {
    width = mobileWidth;
  } else {
    width = desktopWidth;
  }

  let inc = 0.006;
  let xoff = 0;
  let yoff = 0;

  p5.setup = () => {
    p5.createCanvas(width, 300);
    p5.pixelDensity(1);
  };

  p5.draw = () => {
    p5.frameRate(0.5);
    p5.background('#3b0261');
    p5.loadPixels();
    p5.stroke(255);
    p5.noFill();
    p5.beginShape();

    for (let y = 0; y < 300; y++) {
      for (let x = 0; x < width; x++) {
        let index = (x + y * width) * 4;
        let r = p5.noise(xoff, yoff) * 255;
        p5.pixels[index + 0] = r;
        p5.pixels[index + 1] = r;
        p5.pixels[index + 2] = r;
        p5.pixels[index + 3] = 255;
        xoff += inc;
      }
      xoff = 0;
      yoff += inc;
    }
    p5.updatePixels();
  };
}

// p5.setup = () => {
//   p5.createCanvas(500, 300);
//   p5.pixelDensity(1);
// };

// p5.draw = () => {
//   let xoff = 0;
//   let yoff = 0;
//   p5.background('#3b0261');
//   p5.loadPixels();
//   p5.stroke(255);
//   p5.noFill();
//   p5.beginShape();

//   for (let y = 0; y < 300; y++) {
//     for (let x = 0; x < 500; x++) {
//       let index = (x + y * 500) * 4;
//       let r = p5.noise(xoff, yoff) * 255;
//       p5.pixels[index + 0] = r;
//       p5.pixels[index + 1] = r;
//       p5.pixels[index + 2] = r;
//       p5.pixels[index + 3] = 255;
//       xoff += inc;
//     }
//     xoff = 0;
//     yoff += inc;
//   }
//   p5.updatePixels();
// };