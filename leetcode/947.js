// leetcode 947. Most Stones Removed with Same Row or Column
// dfs
// time: o(n^2)
// space: o(n)

function removeStones(stones) {
    let connected = 0;
    const memo = new Array(stones.length);
    for (let i=0; i<stones.length; i++) {
        if (!memo[i]) {
            connected++;
            dfs(stones, memo, i);
        }
    }
    return stones.length - connected;
}

function dfs(stones, memo, idx) {
    if (memo[idx])
        return;
    
    memo[idx] = 1;
    for (let i=0; i<memo.length; i++) {
        if (stones[i][0] === stones[idx][0] || stones[i][1] === stones[idx][1])
            dfs(stones, memo, i);
    }
}
