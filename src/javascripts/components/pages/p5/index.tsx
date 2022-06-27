import React, { useRef, useState, useEffect } from 'react';
import p5 from 'p5';
import Vector from './vectors/vector';

function defaultSketchFunction(p) {
  p.setup = function () {
    p.createCanvas(400, 400);
    p.background(128);
  };

  p.draw = function () {};
}

function defaultSketch(vector: Vector) {
  return defaultSketchFunction;
}

interface CanvasType {
  sketch?: (vector: Vector | Vector[]) => (p) => void;
  vector?: Vector | Vector[];
}

export default function Canvas({ sketch, vector }: CanvasType) {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(undefined);

  useEffect(() => {
    const p5Instance = new p5(sketch(vector), canvasRef.current);

    setCanvas(canvasRef.current);
  }, []);

  return <div ref={canvasRef} />;
}

Canvas.defaultProps = {
  sketch: defaultSketch,
  vector: new Vector({ x: 0, y: 0 }),
};
