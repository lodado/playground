// https://natureofcode.com/book/chapter-2-forces/

import React, { useMemo } from 'react';

import Vector from '../../vectors/vector';
import Canvas from '../..';

const mass = 3;
const velocity = [new Vector({ x: 1, y: 1 }), new Vector({ x: -1, y: 1 })];
const gravity = new Vector({ x: 0, y: 0.02 });
const wind = new Vector({ x: 0.3, y: 0 });

function update(vector: Vector, index: number) {
  velocity[index].add(gravity);
  vector.add(velocity[index]);
}

// F = Ma
function applyWindForce(force: Vector, index: number) {
  const { x, y } = force;
  const f = new Vector({ x, y });

  f.div(mass);
  velocity[index].add(f);
}

function sketch(vector) {
  return function (p) {
    p.setup = function () {
      p.createCanvas(400, 400);
      p.background(128);
    };

    p.draw = function () {
      p.background(128);

      if (vector.length > 1) {
        vector.map((ele, index) => {
          p.ellipse(ele.x, ele.y, 70, 70);
          if (ele.x >= 400 || ele.x < 0) {
            velocity[index].setAttribute({ x: velocity[index].x * -1 });
          }
          if (ele.y >= 400 || ele.y < 0) {
            velocity[index].setAttribute({ y: velocity[index].y * -1 });
          }

          update(ele, index);
          applyWindForce(wind, index);
        });
      }
    };
  };
}

interface ForceCircleType {
  vector?: Vector | Vector[];
}

export default function ForceCircle({ vector }: ForceCircleType) {
  return <Canvas sketch={sketch} vector={vector} />;
}

ForceCircle.defaultProps = {
  vector: new Vector({ x: 0, y: 0 }),
};
