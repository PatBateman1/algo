// leetcode 959. Regions Cut By Slashes
// union find
// time: o(n^2)
// space: o(n^2)

function regionsBySlashes(grid: string[]): number {
    const n = grid.length;
    const parent: number[] = new Array(4 * n * n);
    let ans = 0;
    for (let i=0; i<parent.length; i++)
        parent[i] = i;
    
    for (let r=0; r<n; r++) {
        for (let c=0; c<n; c++) {
            let idx = 4 * (r * n + c);
            switch (grid[r][c]) {
                case '/':
                    merge(parent, idx + 0, idx + 3);
                    merge(parent, idx + 1, idx + 2);
                    break;
                case ' ':
                    merge(parent, idx + 0, idx + 1);
                    merge(parent, idx + 0, idx + 2);
                    merge(parent, idx + 0, idx + 3);
                    break;
                case '\\':
                    merge(parent, idx + 0, idx + 1);
                    merge(parent, idx + 2, idx + 3);
                    break;
            }
            if (r + 1 < n) merge(parent, idx + 2, idx + 4 * n);
            if (c + 1 < n) merge(parent, idx + 1, idx + 4 + 3);
        }
    }
    for (let i=0; i<parent.length; i++)
        if (parent[i] === i) ans++;
    return ans;
};

function find(parent: number[], node: number): number {
    if (parent[node] === node) return node;
    parent[node] = find(parent, parent[node]);
    return parent[node];
};

function merge(parent: number[], n1: number, n2: number): void {
    parent[find(parent, n2)] = find(parent, n1);
};
