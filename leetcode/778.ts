// leetcode 778. Swim in Rising Water
// binary search + dfs
// time: o(mnlogmn)
// space: o(mn) 

function swimInWater(grid: number[][]): number {
    if (grid.length === 0 || grid[0].length === 0) return 0;
    let low: number = grid[0][0], high: number = grid.length * grid.length;
    const initial: number = grid[0][0];
    let ans: number = high;
    while (low <= high) {
        const mid: number = Math.floor((low + high) / 2);
        if (helper(grid, mid, initial)) {
            high = mid - 1;
            ans = Math.min(ans, mid);
        } else {
            low = mid + 1;
        }
    }
    return ans;
};

function helper(grid: number[][], max: number, initial: number): boolean {
    const N: number = grid.length;
    const memo: number[] = new Array(N * N).fill(0);
    return dfs(grid, memo, 0, 0, max, N);
}

function dfs(grid: number[][], memo: number[], row: number, col: number, max: number, N: number): boolean {
    const idx: number = row * N + col;
    if (row === N - 1 && col === N - 1) return true;
    if (memo[idx]) return false;
    memo[idx] = 1;
    let {left, right, up, down} = {left: false, right: false, up: false, down: false};
    if (row + 1 < N && grid[row + 1][col] <= max)
        down = dfs(grid, memo, row + 1, col, max, N);
    if (row - 1 >= 0 && grid[row - 1][col] <= max)
        up = dfs(grid, memo, row - 1, col, max, N);
    if (col + 1 < N && grid[row][col + 1] <= max)
        right = dfs(grid, memo, row, col + 1, max, N);
    if (col - 1 >= 0 && grid[row][col - 1] <= max)
        left = dfs(grid, memo, row, col - 1, max, N);
    return up || down || left || right;
};
