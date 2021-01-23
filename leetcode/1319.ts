// leetcode 1319. Number of Operations to Make Network Connected
// union find
// time: o(n)
// space: o(n)

function makeConnected(n: number, connections: number[][]): number {
    const parent: number[] = new Array(n);
    let group: number = 0;

    if (n - 1 > connections.length) return -1;
    for (let i=0; i<n; i++) parent[i] = i;

    for (let i=0; i<connections.length; i++) {
        const conn: number[] = connections[i];
        if (find(parent, conn[0]) !== find(parent, conn[1]))
            parent[parent[conn[1]]] = parent[conn[0]];
    }

    for (let i=0; i<n; i++) {
        if (parent[i] === i)
            group++;
    }
    return group - 1;
};

function find(parent: number[], node: number): number {
    if (parent[node] === node) return node;
    parent[node] = find(parent, parent[node]);
    return parent[node];
};
