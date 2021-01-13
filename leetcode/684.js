// leetcode 684. Redundant Connection
// union find
// time: o(n)
// space: o(n)

function findRedundantConnection(edges) {
    const parent = {};
    let ans;
    edges.forEach((pair) => {
        if (!parent[pair[0]] && !parent[pair[1]]) {
            parent[pair[0]] = pair[0];
            parent[pair[1]] = pair[0];
        } else if (!parent[pair[1]]) {
            parent[pair[1]] = find(parent, pair[0]);
        } else if (!parent[pair[0]]) {
            parent[pair[0]] = find(parent, pair[1]);
        } else if (parent[pair[0]] && parent[pair[1]]) {
            const p1 = find(parent, pair[0]);
            const p2 = find(parent, pair[1]);
            if (p1 === p2)
                ans = pair;
            parent[pair[1]] = p1;
            parent[p2] = p1;
        }
    });
    return ans;
}

function find(parent, tar) {
    if (tar === parent[tar])
        return tar;
    
    parent[tar] = find(parent, parent[tar])
    return parent[tar];
}
