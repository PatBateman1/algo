# leetcode 209 Minimum Size Subarray Sum


# two pointers time: O(n) space: O(1) 56s
class Solution1:
	def minSubArrayLen(self, s: int, nums: List[int]) -> int:
	    if not nums: return 0
	    front, back, curr, ans = 0, 0, 0, float("inf")
	    while back < len(nums):
	        curr += nums[back]
	        while curr >= s and front <= back:
	            ans = min(ans, back - front + 1)
	            curr -= nums[front]
	            front += 1
	        back += 1
	    if front == 0: return 0
	    return ans


# binary search time: O(nlogn) space: O(1) 88ms
class Solution2:
    def minSubArrayLen(self, s: int, nums: List[int]) -> int:
        front, back, ans = 0, len(nums), len(nums) + 1
        while front <= back:
            mid = (front + back) // 2
            if self.check(nums, mid, s):
                ans = min(ans, mid)
                back = mid - 1
            else:
                front = mid + 1
        if ans == len(nums) + 1:
            return 0
        return ans

    def check(self, nums, length, target):
        curr = sum(nums[:length])
        if curr >= target: return True
        for i in range(len(nums) - length):
            curr = curr + nums[length + i] - nums[i]
            if curr >= target:
                return True
        return False




