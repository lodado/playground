// https://natureofcode.com/book/chapter-1-vectors/

import React, { useRef, useState, useEffect } from 'react';
import p5 from 'p5';
import Vector from '../../vectors/vector';

function sketch(p) {
  const vector = new Vector({ x: 0, y: 0, dx: 1, dy: 2.8 });

  p.setup = function () {
    p.createCanvas(400, 400);
    p.background(128);
  };

  p.draw = function () {
    p.background(128);

    p.ellipse(vector.x, vector.y, 70, 70);
    if (vector.x > 400 || vector.x < 0) {
      vector.dx *= -1;
    }
    if (vector.y > 400 || vector.y < 0) {
      vector.dy *= -1;
    }

    vector.add();
  };
}

export default function Canvas() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(undefined);

  useEffect(() => {
    const p5Instance = new p5(sketch, canvasRef.current);
    setCanvas(canvasRef.current);
  }, []);

  return <div ref={canvasRef} />;
}
