// https://natureofcode.com/book/chapter-1-vectors/

import React, { useMemo } from 'react';

import Vector from '../../vectors/vector';
import Canvas from '../..';

function sketch(vector) {
  return function (p) {
    p.setup = function () {
      p.createCanvas(400, 400);
      p.background(128);
    };

    p.draw = function () {
      p.background(128);

      p.ellipse(vector.x, vector.y, 70, 70);
      if (vector.x > 400 || vector.x < 0) {
        vector.setAttribute({ dx: vector.dx * -1 });
      }
      if (vector.y > 400 || vector.y < 0) {
        vector.setAttribute({ dy: vector.dy * -1 });
      }

      vector.add(vector);
    };
  };
}

interface BouncingCircleType {
  vector?: Vector;
}

export default function BouncingCircle({ vector }: BouncingCircleType) {
  return <Canvas sketch={sketch} vector={vector} />;
}

BouncingCircle.defaultProps = {
  vector: new Vector({ x: 0, y: 0, dx: 1, dy: 2.8 }),
};
