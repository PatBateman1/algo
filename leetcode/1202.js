// leetcode 1202. Smallest String With Swaps
// union find
// time: o(n)
// space: o(n)

function smallestStringWithSwaps(s, pairs) {
	const union = new UnionFind(s.length);
	const map = {};
	const ans = new Array(s.length);
	for (let i=0; i<pairs.length; i++)
		union.union(pairs[i][0], pairs[i][1]);
	
	for (let i=0; i<s.length; i++) {
		const parent = union.find(i);
		if (map[parent])
			map[parent].push(i);
		else
			map[parent] = [i];
	}

	for (key in map) {
		const sorted = Array.from(map[key]).sort((a, b) => s[a].charCodeAt() - s[b].charCodeAt());
		for (let i=0; i<map[key].length; i++)
			ans[map[key][i]] = s[sorted[i]];
	}

	return ans.join("");

}

class UnionFind {
	constructor(length) {
		this.parent = new Array(length);
		this.init();
	}

	init() {
		const length = this.parent.length;
		for (let i=0; i<length; i++)
			this.parent[i] = i;
	}

	union(a, b) {
		this.parent[this.find(b)] = this.parent[this.find(a)];
	}

	find(a) {
		if (this.parent[a] === a)
			return a
		else {
			const parent = this.find(this.parent[a]);
			this.parent[a] = parent;
			return parent;
		}
	}
}
