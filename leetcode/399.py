# leetcode 399. Evaluate Division
# dfs
# time: o(n)
# space: o(n)

class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
		memo1 = {}
        memo2 = {}
        
        
        def search(key, val, id):
            memo2[key] = [val, id]
            if key in memo1:
                childern = memo1[key]
                for child in childern:
                    if child[0] not in memo2:
                        search(child[0], memo2[key][0]/child[1], id)

        
        for i in range(len(equations)):
            if equations[i][0] not in memo1:
                memo1[equations[i][0]] = [[equations[i][1], values[i]]]
            else:
                memo1[equations[i][0]].append([equations[i][1], values[i]])
                
            if equations[i][1] not in memo1:
                memo1[equations[i][1]] = [[equations[i][0], 1/values[i]]]
            else:
                memo1[equations[i][1]].append([equations[i][0], 1/values[i]])
        id = 0
        for key in memo1:
            if key not in memo2:
                search(key, 1.0, id)
                id += 1
        
        
        ans = []
        for que in queries:
            if que[0] in memo2 and que[1] in memo2 and memo2[que[0]][1] == memo2[que[1]][1]:
                ans.append(memo2[que[0]][0] / memo2[que[1]][0])
            else:
                ans.append(-1.0)
        return ans