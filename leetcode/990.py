# leetcode 990 Satisfiability of Equality Equations


# union find time: O(log*n) space: O(n) 64ms
class Solution:
    class UnionFind:
        def __init__(self):
            self.father = [i for i in range(26)]

        # find the father of the node and compress 
        def findFather(self, x):
            # find the father
            father = x
            while self.father[father] != father:
                father = self.father[father]
            
            # compress
            while self.father[x] != x:
                temp = self.father[x]
                self.father[x] = father
                x = temp
            
            return father
        
        # connect two nodes
        def connect(self, x, y):
            self.father[self.findFather(x)] = self.findFather(y)
            

    def equationsPossible(self, equations: List[str]) -> bool:
        unionFind = Solution.UnionFind()
        for equation in equations:
            if equation[1] == "=": 
                unionFind.connect(ord(equation[0]) - ord("a"), ord(equation[3]) - ord("a"))

        for equation in equations:
            if equation[1] == "!":
                if unionFind.findFather(ord(equation[0]) - ord("a")) == unionFind.findFather(ord(equation[3]) - ord("a")):
                    return False

        return True     