const Graph = require('../Graph');

const DFS = (graph, vertex) => {
    let result = [];
    let visited = new Array(graph.numberOfNodes).fill(false);
    const dfs_helper = (vertex, visited) => {
        visited[vertex] = true;
        result.push(vertex);
        let adjNodes = graph.adjacentList[vertex];
        while (adjNodes.length) {
            let temp = adjNodes.shift();
            if (!visited[temp]) {
                dfs_helper(temp, visited);
            }
        }

    }
    dfs_helper(vertex, visited);
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

DFS(myGraph, '2');

const myGraph2 = new Graph();
myGraph2.addVertex(0);
myGraph2.addVertex(1);
myGraph2.addVertex(2);
myGraph2.addVertex(3);
myGraph2.addEdge(0, 1);
myGraph2.addEdge(0, 2);
myGraph2.addEdge(1, 2);
myGraph2.addEdge(2, 0);
myGraph2.addEdge(2, 3);
myGraph2.addEdge(3, 3);
DFS(myGraph2, 2);