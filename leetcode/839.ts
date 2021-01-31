// leetcode 839. Similar String Groups
// union find
// time o(n^2)
// space o(n)

function numSimilarGroups(strs: string[]): number {
    const parent: number[] = new Array(strs.length);
    let ans = 0;
    for (let i=0; i<parent.length; i++) parent[i] = i;
    for (let i=0; i<strs.length; i++) {
        for (let j=0; j<i; j++) {
            if (isSimilar(strs[j], strs[i])) {
                parent[find(parent, i)] = find(parent, j);
            }
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

function isSimilar(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    const diff: number[] = [];
    for (let i=0; i<a.length; i++)
        if (a[i] !== b[i]) diff.push(i);
    
    if (diff.length === 0) return true;
    if (diff.length !== 2) return false;
    return a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]];
};
