# merge sort top-down
# time: nlogn space: logn

def mergeSort(nums):
	if not nums: return

	def helper(i, j):
		if i == j:
			return
		if i + 1 == j:
			if nums[i] > nums[j]:
				nums[i], nums[j] = nums[j], nums[i]

		front, back, mid = i, j, (i + j) // 2
		helper(i, mid)
		helper(mid + 1, j)

		temp, m = [], (i + j) // 2 + 1
		while i <= mid or m <= j:
			if i <= mid and m <= j:
				if nums[i] <= nums[m]:
					temp.append(nums[i])
					i += 1
				else:
					temp.append(nums[m])
					m += 1
			elif i > mid:
				temp.append(nums[m])
				m += 1
			else:
				temp.append(nums[i])
				i += 1

		nums[front:back+1] = temp

	helper(0, len(nums)-1)


