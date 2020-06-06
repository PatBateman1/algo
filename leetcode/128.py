# leetcode 128 Longest Consecutive Sequence


# hash table time: O(n) space: O(n) 56ms
def longestConsecutive(self, nums: List[int]) -> int:
        if not nums: return 0
        memo = {}
        ans = 1
        for num in nums:
            if num not in memo:
                memo[num] = 1
                left, right = num, num 
                if  num - 1 in memo:
                    left = num - memo[num - 1] 
                    memo[num] += memo[num - 1]
                   
                if num + 1 in memo:
                    right = num + memo[num + 1]              
                    memo[num] += memo[num + 1]
                    
                memo[left], memo[right] = memo[num], memo[num]
                ans = max(ans, memo[num])
        return ans