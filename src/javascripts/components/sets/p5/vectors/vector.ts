interface VectorType {
  x?: number;
  y?: number;
  dx?: number;
  dy?: number;
}

export default class Vector {
  x: number;

  y: number;

  dx: number;

  dy: number;

  attribute: VectorType;

  constructor({ x, y, dx, dy }: VectorType) {
    this.setAttribute({ x, y, dx, dy });
  }

  setAttribute(attribute: VectorType) {
    const { x, y, dx, dy } = attribute;

    if (x !== undefined) {
      this.x = x;
    }

    if (y !== undefined) {
      this.y = y;
    }

    if (dx !== undefined) {
      this.dx = dx;
    }

    if (dy !== undefined) {
      this.dy = dy;
    }
  }

  // add vectors
  add(vector: VectorType) {
    this.setAttribute({ x: this.x + vector.dx, y: this.y + vector.dy });
  }

  // subtract vectors
  sub(vector: VectorType) {
    this.setAttribute({ x: this.x - vector.dx, y: this.y - vector.dy });
  }

  // scale the vector with division
  div() {}

  // set the magnitude of a vector
  setMag() {}

  // normalize the vector to a unit length of 1
  normalize() {}

  // rotate a 2D vector by an angle
  rotate() {}

  // linear interpolate to another vector
  lerp() {}

  // the Euclidean distance between two vectors (considered as points)
  dist() {}

  // the Euclidean distance between two vectors (considered as points)
  angleBetween() {}

  // the dot product of two vectors
  dot() {}

  // the cross product of two vectors (only relevant in three dimensions)
  cross() {}
}
