# leetcode 5455 Minimum Number of Days to Make m Bouquets


# binary search & greedy time: O(nlog( max - min )) space: O(1) 1244ms
def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
	def check(n):
	    curr, total = 0, 0
	    for i in range(len(bloomDay)):
	        if bloomDay[i] > n:
	            curr = 0
	        else:
	            curr += 1
	            if curr == k:
	                curr = 0
	                total += 1
	        if total >= m:
	            return True
	    return total >= m

	left, right, ans = min(bloomDay), max(bloomDay), -1
	while left <= right:
	    mid = (left + right) // 2
	    if check(mid):
	        ans = mid
	        right = mid - 1
	    else:
	        left = mid + 1

	return ans