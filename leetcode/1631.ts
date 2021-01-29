// leetcode 1631. Path With Minimum Effort
// binary search + union find
// time: o(mn * logM)
// space: o(mn) 

function minimumEffortPath(heights: number[][]): number {
    if (heights.length === 0 || heights[0].length === 0) return 0;
    let low: number = 0, high: number = 1000000;
    let ans: number = 1000000;
    while (low <= high) {
        const mid: number = Math.floor((low + high) / 2);
        if (unionFind(heights, mid)) {
            high = mid - 1;
            ans = Math.min(ans, mid);
        } else {
            low = mid + 1;
        }
    }

    return ans;
};

function unionFind(heights: number[][], max: number): boolean {
    const len: number = heights.length * heights[0].length;
    const parent = new Array(len);
    for (let i=0; i<len; i++) parent[i] = i;
    for (let i=0; i<heights.length; i++) {
        for (let j=0; j<heights[0].length; j++) {
            const idx = i * heights[0].length + j;
            if (i + 1 < heights.length && Math.abs(heights[i + 1][j] - heights[i][j]) <= max) {
                let downIdx: number = (i + 1) * heights[0].length + j;
                let downParent = find(parent, downIdx);
                let p = find(parent, idx);
                if (downParent > p) parent[downParent] = p;
                else parent[p] = downParent;
            }
            if (j + 1 < heights[0].length && Math.abs(heights[i][j + 1] - heights[i][j]) <= max) {
                let rightIdx: number = i * heights[0].length + j + 1;
                let rightParent = find(parent, rightIdx);
                let p = find(parent, idx);
                if (rightParent > p) parent[rightParent] = p;
                else parent[p] = rightParent;
            }
        }
    }

    return find(parent, len - 1) === 0;
};

function find(parent: number[], node: number) {
    if (parent[node] === node) return node;
    parent[node] = find(parent, parent[node]);
    return parent[node];
};
