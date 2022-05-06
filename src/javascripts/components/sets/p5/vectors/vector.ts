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

  add() {
    this.setAttribute({ x: this.x + this.dx, y: this.y + this.dy });
  }

  sub() {
    this.setAttribute({ x: this.x - this.dx, y: this.y - this.dy });
  }
}
