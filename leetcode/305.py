# leetcode 305 Number of Islands II


# union find time: O(K*log(m*n)) space: O(m*n) 756ms
class Solution:
    class UnionFind:
        def __init__(self, m, n):
            self.graph = [[(i, j) for j in range(n)] for i in range(m)]

        def find(self, i, j):
            # find the father
            father = (i, j)
            while self.graph[father[0]][father[1]] != father:
                father = self.graph[father[0]][father[1]]

            # compress
            child = (i, j)
            while self.graph[child[0]][child[1]] != father:
                temp = self.graph[child[0]][child[1]]
                self.graph[child[0]][child[1]] = father
                child = temp
            return father

        def union(self, child1, child2):
            father1 = self.find(child1[0], child1[1])
            father2 = self.find(child2[0], child2[1])
            self.graph[father1[0]][father1[1]] = father2
    
    def numIslands2(self, m: int, n: int, positions: List[List[int]]) -> List[int]:
        unionFind, ret, ans = Solution.UnionFind(m, n), [], 0
        islands = set()
        for pos in positions:
            i, j = pos[0], pos[1]
            if f"{i} {j}" in islands:
                ret.append(ret[-1])
                continue
            islands.add(f"{i} {j}")
            ans += 1
            surrounding = [(i-1, j), (i+1, j), (i, j-1), (i, j+1)]
            for p in surrounding:
                if f"{p[0]} {p[1]}" in islands:
                    if unionFind.find(i, j) != unionFind.find(p[0], p[1]):
                        ans -= 1
                    unionFind.union(pos, p)
            ret.append(ans)
        return ret