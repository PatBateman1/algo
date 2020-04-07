# leetcode 53 maximum subarray

# dp solution time: O(n) space: O(n) 76ms
def sol1(nums):
	dp, ans = nums[:], nums[0]
	for i in range(1, len(nums)):
		if dp[i-1] > 0:
			dp[i] += dp[i-1]
		ans = max(dp[i], ans)
	return ans


# better dp/greedy solution time: O(n) space: O(1) 60ms
def sol1_better(nums):
	import sys
	max_end, ans = -sys.maxsize, -sys.maxsize
    for num in nums:
        max_end = max(max_end + num, num)
        ans = max(ans, max_end)
    return ans

# divide and conquer solution time: O(n) space: O(logn) 80ms
def sol2(nums):
	ans = nums[0]

        def helper(front, back):
            nonlocal ans
            
            if front == back:
                ans = max(ans, nums[front])
                return nums[front], nums[front], nums[front]
            
            mid = (front + back) // 2
            
            ll, lr, lc = helper(front, mid)
            rl, rr, rc = helper(mid+1, back)
            l = max([ll, lc, lc+rl])
            r = max([rr, rc, rc+lr])
            c = lc + rc
            ans = max([ans, l, r, c, lr+rl])
            return l, r, c

        helper(0, len(nums)-1)
        return ans



