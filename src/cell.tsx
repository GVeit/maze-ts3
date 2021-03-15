//cell for maze 
export class Cell {
    visited: boolean;
    up: boolean;
    right: boolean;
    down: boolean;
    left: boolean;
    x: any;
    y: any;
    constructor(x, y) {
      this.visited = false;
      this.up = true;
      this.right = true;
      this.down = true;
      this.left = true;
      this.x = x;
      this.y = y;
    }
  }