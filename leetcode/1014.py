# leetcode 1014 Best Sightseeing Pair


# greedy time: O(n) space: O(1) 512ms
def maxScoreSightseeingPair(self, A: List[int]) -> int:
    front, ans = 0, 0
    for i in range(1, len(A)):
        ans = max(ans, A[front] + A[i] + front - i)
        if A[front] - A[i] + front - i <= 0:
            front = i
    
    return ans