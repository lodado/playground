// https://natureofcode.com/book/chapter-2-forces/

import React, { useMemo } from 'react';

import Vector from '../../vectors/vector';
import Canvas from '../..';

let mass = 3;
let velocity = new Vector({ x: 1, y: 1 });
let gravity = new Vector({ x: 0, y: 0.2 });
let wind = new Vector({ x: 0.3, y: 0 });

function update(vector: Vector) {
  velocity.add(gravity);
  vector.add(velocity);
}

// F = Ma
function applyWindForce(force: Vector) {
  const { x, y } = force;
  const f = new Vector({ x, y });

  f.div(mass);
  velocity.add(f);
}

function sketch(vector) {
  return function (p) {
    p.setup = function () {
      p.createCanvas(400, 400);
      p.background(128);
    };

    p.draw = function () {
      p.background(128);

      p.ellipse(vector.x, vector.y, 70, 70);
      if (vector.x >= 400 || vector.x < 0) {
        velocity.setAttribute({ x: velocity.x * -1 });
      }
      if (vector.y >= 400 || vector.y < 0) {
        velocity.setAttribute({ y: velocity.y * -1 });
      }

      update(vector);
      applyWindForce(wind);
    };
  };
}

interface ForceCircleType {
  vector?: Vector;
}

export default function ForceCircle({ vector }: ForceCircleType) {
  return <Canvas sketch={sketch} vector={vector} />;
}

ForceCircle.defaultTypes = {
  vector: new Vector({ x: 0, y: 0 }),
};
