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

export default function SineWaveFun(p5) {

  let width;
  let mobileWidth = window.innerWidth - 150;
  let desktopWidth = 500;

  if (window.innerWidth <= 500) {
    width = mobileWidth;
  } else {
    width = desktopWidth;
  }

  p5.setup = () => {
    p5.createCanvas(width, 300, p5.WEBGL);
    p5.angleMode(p5.DEGREES);
  };

  p5.draw = () => {
    p5.background('#3b0261');
    p5.rotateX(60);
    p5.noFill();
    p5.stroke(255);

    for (let i = 0; i < 20; i++) {
    
      let r = p5.map(p5.sin(p5.frameCount), -1, 1, 0, 255);
      let g = p5.map(i, 0, 20, 0, 255);
      let b = p5.map(p5.cos(p5.frameCount), -1, 1, 255, 0);

      p5.stroke(r, g, b);

      p5.beginShape();
      for (let j = 0; j < 360; j++) {
        let rad = i * 8;
        let x = rad * p5.cos(j);
        let y = rad * p5.sin(j) - 50;
        let z = p5.sin(p5.frameCount * 2 + i * 10) * 50;

        p5.vertex(x, y, z);
      }
      p5.endShape(p5.CLOSE);
    }
  };
}
