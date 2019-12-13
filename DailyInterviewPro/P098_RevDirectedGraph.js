/**
 * Facebook
 *
 * Given a directed graph, reverse the directed graph so all directed edges are reversed.

    Example:
        Input: A -> B, B -> C, A ->C

        Output: B->A, C -> B, C -> A
 */

const Graph = require('../ds/Graph/Graph');

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('B', 'A');
graph.addEdge('C', 'B');
graph.addEdge('C', 'A');

console.log(graph);