export class Cell {
    northEdge: boolean = true;
    eastEdge: boolean = true;
    westEdge: boolean = true;
    southEdge: boolean = true;
    // ...
    
    constructor(
      public readonly row: number = 0,
      public readonly col: number = 0
    ) {}
    // ...
  }