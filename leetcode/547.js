// leetcode 547. Number of Provinces
// dfs
// time: o(n^2)
// space: o(n)

function findCircleNum(isConnected) {
	const memo = {};
	let ans = 0;
	for (let i=0; i<isConnected.length; i++) {
		if (memo[i])
			continue;
		ans++;
		dfs(i, isConnected, memo);
		
	}
	return ans;
}

function dfs(city, matrix, memo) {
	if (memo[city])
		return;

	memo[city] = 1;
	for (let i=0; i<matrix[city].length; i++) {
		if (city !== i && matrix[city][i] === 1)
			dfs(i, matrix, memo);
	}
	
}
