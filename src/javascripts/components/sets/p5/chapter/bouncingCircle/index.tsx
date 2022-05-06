// https://natureofcode.com/book/chapter-1-vectors/

import React, { useMemo } from 'react';

import Vector from '../../vectors/vector';
import Canvas from '../..';

function update(vector: Vector, velocity: Vector) {
  vector.add(velocity);
}

function sketch(vector) {
  const velocity = new Vector({ x: 1, y: 2.8 });

  return function (p) {
    p.setup = function () {
      p.createCanvas(400, 400);
      p.background(128);
    };

    p.draw = function () {
      p.background(128);

      p.ellipse(vector.x, vector.y, 70, 70);
      if (vector.x > 400 || vector.x < 0) {
        velocity.setAttribute({ x: velocity.x * -1 });
      }
      if (vector.y > 400 || vector.y < 0) {
        velocity.setAttribute({ y: velocity.y * -1 });
      }

      update(vector, velocity);
    };
  };
}

interface BouncingCircleType {
  vector?: Vector;
}

export default function BouncingCircle({ vector }: BouncingCircleType) {
  return <Canvas sketch={sketch} vector={vector} />;
}

BouncingCircle.defaultTypes = {
  vector: new Vector({ x: 0, y: 0 }),
};
