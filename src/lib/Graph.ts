import { Node } from './Node';

export class Graph {
  nodes: Node[];

  constructor() {
    this.nodes = [];
  }

  addNode(value: string, quantifier?: string, piece?: number, branch?: number) {
    const newNode = new Node(value, quantifier, piece, branch);
    this.nodes.push(newNode);
    return newNode;
  }

  addEdge(nodeA: Node, nodeB: Node) {
    nodeA.addNeighbor(nodeB);
    nodeB.addNeighbor(nodeA);
  }
  toString() {

    let graphString = '';

    let nodesWithSymbol = new Map();

    graphString += "graph LR\n";
    graphString += "start(start)\n";

    for (let i = 0; i < this.nodes.length; i++) {
      graphString += `n${i}(${this.nodes[i].text})\n`;
      nodesWithSymbol.set(`n${i}`, this.nodes[i]);
    }

    graphString  += "end1(end)\n";
    graphString += "start --> n0\n";

    let keys = Array.from(nodesWithSymbol.keys());

    for (let i = 0; i < keys.length; i++) {
      let currentNode = keys[i];
      let nextNode = keys[i + 1]

      let quantifier = this.nodes[i].quantifier;
      //for later use
      let quantifierText = '';
      if(quantifier!=undefined){
        switch(quantifier){
          case '*': {
            quantifierText = "0-n";
            break;
          }
          case '+': {
            quantifierText = "1-n";
            break;
          }
          case '?': {
            quantifierText = "0-1";
            break;
          }
          default:{
            console.log("Another quantifier?")
            break;
          }
        }
      }

      if (quantifier !== undefined) {
        graphString += `${currentNode} --> |${quantifierText}| ${currentNode}\n`;
      }
      if (i == keys.length - 1) {
        graphString += `${currentNode} --> end1\n`;
      } else {
        graphString += `${currentNode} --> ${nextNode}\n`;
      }
    }
    return graphString;
  }
}
