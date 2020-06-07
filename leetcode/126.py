# leetcode 126 Word Ladder II

# BFS + backTrack 480ms
class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        wordSet = set(wordList)
        if endWord not in wordSet:
            return []
        if beginWord not in wordSet:
            wordSet.add(beginWord)

        # build the graph
        graph = self.buildGraph(wordSet, endWord, beginWord)
        
        # use backTrack to find the answer
        if not graph[max(graph)]:
            return []
        ans = self.backTrack(max(graph.keys()) - 1, [beginWord], graph, [])
        return ans

    def diff(self, s1, s2):
        d = 0
        for i in range(len(s1)):
            if s1[i] != s2[i]:
                d += 1
        return d
        
    def buildGraph(self, wordSet, endWord, beginWord):
        graph = {1: set([endWord])}
        curr, chars = 1, list("abcdefghijklmnopqrstuvwxyz")
        while True:
            graph[curr + 1] = set()
            for word in graph[curr]:
                for i in range(len(word)):
                    for j in range(len(chars)):
                        newWord = word[0:i] + chars[j] + word[i+1:len(word)]
                        if newWord in wordSet:
                            graph[curr + 1].add(newWord)
                            wordSet.remove(newWord)
                            if newWord == beginWord:
                                return graph
            if not graph[curr + 1]:
                return graph
            curr += 1
        return graph

    def backTrack(self, currL, curr, graph, ans):
        if currL == 0:
            ans.append(curr[:])
            return 

        for word in graph[currL]:
            if self.diff(curr[-1], word) == 1:
                curr.append(word)
                self.backTrack(currL - 1, curr, graph, ans)
                curr.pop()
        return ans