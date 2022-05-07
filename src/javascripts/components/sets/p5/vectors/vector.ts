const [WIDTH, HEIGHT] = [400, 400]; // copy & paste시 global에 넣으세요

interface VectorType {
  x?: number;
  y?: number;
}

export default class Vector {
  x: number;

  y: number;

  dx = 0;

  dy = 0;

  constructor({ x, y }: VectorType) {
    this.setAttribute({ x, y });
  }

  setAttribute(attribute: VectorType) {
    const { x, y } = attribute;

    if (x !== undefined) {
      this.x = x;
    }

    if (y !== undefined) {
      this.y = y;
    }
  }

  setAttributeEdge(attribute: VectorType) {
    let { x, y } = attribute;

    if (x > WIDTH) {
      x = 0;
    } else if (x < 0) {
      x = WIDTH;
    }

    if (y > HEIGHT) {
      y = 0;
    } else if (y < 0) {
      y = HEIGHT;
    }

    this.setAttribute({ ...attribute, x, y });
  }

  // add vectors
  add(vector: VectorType) {
    this.setAttribute({ x: this.x + vector.x, y: this.y + vector.y });
  }

  // subtract vectors
  sub(vector: VectorType) {
    this.setAttribute({ x: this.x - vector.x, y: this.y - vector.y });
  }

  // scale the vector with multiply
  mul(value: number) {
    this.setAttribute({ x: this.x * value, y: this.y * value });
  }

  // scale the vector with division
  div(value: number) {
    if (value !== 0) {
      this.setAttribute({ x: Math.floor(this.x / value), y: Math.floor(this.y / value) });
    }
  }

  // get the magnitude of a vector
  getMag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  // normalize the vector to a unit length of 1
  normalize() {
    return { x: this.x / this.getMag(), y: this.getMag() };
  }

  /* rotate a 2D vector by an angle
    |cos -sin | x |
    |sin  cos | y |
  */
  rotate2D(theta: number) {
    const [x, y] = [this.x, this.y];

    this.setAttribute({
      x: Math.cos(theta) * x - Math.sin(theta) * y,
      y: Math.sin(theta) * x + Math.cos(theta) * y,
    });
  }

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
