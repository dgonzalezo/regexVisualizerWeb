export class Node {
  text: string;
  neighbors: Node[];
  quantifier?: string;
  branch?: number;
  piece?: number;

  constructor(value: string, quantifier?: string, piece?: number, branch?: number) {
    this.text = value;
    this.quantifier = quantifier;
    this.piece = piece;
    this.branch = branch;
    this.neighbors = [];
  }

  addNeighbor(node: Node) {
    this.neighbors.push(node);
  }
}
