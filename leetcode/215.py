# leetcode 215 Kth Largest Element in an Array

# quick select time: O(n) on average O(n^2) at worest space: O(1)  64ms
def sol(nums, k):
	"""use quick sort and binary sort 
	"""

	def partition(front, end):

		if front == end:
			return front

		mid, slow, fast = (front + end) // 2, front-1, front
		pivot = nums[mid]

		# move pivot to the end
		nums[mid], nums[end] = nums[end], nums[mid]

		# move element which larget than pivot to the left
		while fast < end:
			if nums[fast] > pivot:
				nums[fast], nums[slow+1] = nums[slow+1], nums[fast]
				fast += 1
				slow += 1
			else:
				fast += 1
		nums[end], nums[slow+1] = nums[slow+1], nums[end]
		return slow + 1

	front, end, ans = 0, len(nums) - 1, -1
	while front <= end and ans != k:
		ans = partition(front, end)
		if ans + 1 == k:
			break
		elif ans + 1 > k:
			end = ans - 1
		else:
			front = ans + 1
	return nums[ans]

