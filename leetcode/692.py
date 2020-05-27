# leetcode 692 Top K Frequent Words

# sort time: O(nlogn) space: O(n) 52ms
def topKFrequent(self, words: List[str], k: int) -> List[str]:
        memo = {}
        for word in words:
            if word in memo:
                memo[word] += 1
            else:
                memo[word] = 1
        return sorted(memo.keys(), key=lambda x: [-memo[x], x])[:k]