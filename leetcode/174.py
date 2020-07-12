# leetcode 174 Dungeon Game

# dfs with memo time: O(mn) space: O(mn) 72ms
class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        self.memo = [[-1 for i in range(len(dungeon[0]))] for j in range(len(dungeon))]
        self.dfs(dungeon, 0, 0)
        print(self.memo)
        return self.dfs(dungeon, 0, 0)

    def dfs(self, grid, i, j):
        if i >= len(grid) or j >= len(grid[0]):
            return float('inf')

        if i == len(grid) - 1 and j == len(grid[0]) - 1:
            return 1 - grid[i][j] if grid[i][j] < 0 else 1
    
        if self.memo[i][j] == -1:
            left = self.dfs(grid, i, j + 1)
            down = self.dfs(grid, i + 1, j)
            self.memo[i][j] = min(left, down)

        nextAdd = self.memo[i][j]
        if grid[i][j] > 0:
            ans = max(1, nextAdd - grid[i][j])
        else:
            ans = nextAdd - grid[i][j]
        return ans