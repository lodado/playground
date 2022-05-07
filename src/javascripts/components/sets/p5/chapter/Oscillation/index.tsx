// https://natureofcode.com/book/chapter-1-vectors/

import React, { useMemo } from 'react';

import Vector from '../../vectors/vector';
import Canvas from '../..';

function update(vector: Vector, velocity: Vector) {
  vector.add(velocity);
}

const rotateSpeed = 0.01;

let angle = 0;
let velocity = 0;
let accelertation = 0.001;

const rects = Array.from({ length: 16 }, (ele, index: number) => {
  return new Vector({ x: Math.random() * 100, y: Math.random() * 500 - 400 });
});

const cursor = new Vector({ x: 50, y: 50 });
const cursorVelocity = new Vector({ x: 0, y: 0, limit: 100 });

function sketch(vector) {
  return function (p) {
    p.setup = function () {
      p.createCanvas(400, 400);
      p.background(128);
    };

    p.draw = function () {
      p.background(128);
      p.translate(200, 200);

      // push~pop 안에는 격리됨
      p.push();
      p.rotate(angle);
      p.line(-50, 0, 50, 0);
      p.ellipse(50, 0, 8, 8);
      p.ellipse(-50, 0, 8, 8);

      if (velocity > 0.3 || velocity < -0.3) {
        accelertation *= -1;
      }

      velocity += accelertation;
      angle += velocity;

      p.pop();

      for (let i = 0; i < 16; i++) {
        const acc = rects[i].x / 1000000.0;

        rects[i].dx += acc;

        p.rect(rects[i].x, rects[i].y, i, i);
        rects[i].rotate2D(rects[i].dx);
      }

      // 각도로 회전
      p.ellipse(vector.x, vector.y, 30, 30);
      vector.rotate2D(rotateSpeed);

      // 커서
      const angle3 = Math.atan((p.mouseY - 200 - cursor.y) / (p.mouseX - 200 - cursor.x));

      const mouseVector = new Vector({ x: p.mouseX - 200, y: p.mouseY - 200 });
    };
  };
}

interface AngleLineType {
  vector?: Vector | Vector[];
}

export default function AngleLine({ vector }: AngleLineType) {
  return <Canvas sketch={sketch} vector={vector} />;
}

AngleLine.defaultProps = {
  vector: new Vector({ x: 100, y: 100 }),
};
