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

export default function Particles(p5) {

  let width;
  let mobileWidth = window.innerWidth - 150;
  let desktopWidth = 500;

  if (window.innerWidth <= 500) {
    width = mobileWidth;
  } else {
    width = desktopWidth;
  }

  const particles = [];

  p5.setup = () => {
    p5.createCanvas(width, 300);
    p5.random();
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }
  };

  p5.draw = () => {
    p5.background('#3b0261');
    particles.forEach((p, index) => {
      p.update();
      p.draw();
      p.checkParticles(particles.slice(index));
    });
  };

  class Particle {
    constructor() {
      this.pos = p5.createVector(p5.random(width), p5.random(300));
      this.size = 5;
      this.velocity = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));
    }

    edges() {
      if (this.pos.x < 0 || this.pos.x > width) {
        this.velocity.x *= -1;
      }
      if (this.pos.y < 0 || this.pos.y > 300) {
        this.velocity.y *= -1;
      }
    }

    checkParticles(particlesList) {
      particlesList.forEach((particle) => {
        const d = p5.dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

        if (d < 90) {
          p5.stroke('rgba(100%, 0%, 100% ,0.1)');
          p5.line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
        }
      });
    }

    // update movement by adding velocity
    update() {
      this.pos.add(this.velocity);
      this.edges();
    }

    draw() {
      p5.noStroke();
      p5.fill('rgba(255, 255, 255, 0.5)');
      p5.circle(this.pos.x, this.pos.y, this.size);
    }
  }
}
