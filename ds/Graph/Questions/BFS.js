const Graph = require('../Graph');

const BFS = (graph, vertex) => {
    let visited = new Array(graph.numberOfNodes).fill(false);
    visited[vertex] = true;
    let queue = [vertex];
    let result = [];
    while (queue.length) {
        let V = queue.shift();
        result.push(V);
        let adjNodes = graph.adjacentList[V];
        while (adjNodes.length) {
            let temp = adjNodes.shift();
            if (!visited[temp]) {
                queue.push(temp);
                visited[temp] = true;
            }
        }
    }
    console.log(result);
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

BFS(myGraph, '2');