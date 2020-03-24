def sort(arr, front, back):
	"""
	quick sort 
	"""
	
	if front >= back:
		return 
	f1, f2, p = front, back, (front+back) // 2

	while front < back:
		while back > p and arr[back] >= arr[p]:
			back -= 1
		arr[back], arr[p] = arr[p], arr[back]
		p = back

		while front < p and arr[front] <= arr[p]:
			front += 1
		arr[front], arr[p] = arr[p], arr[front]
		p = front
	sort(arr, f1, p-1)
	sort(arr, p+1, f2)


a = [9,8,7,6,5,4,3,2,1] * 1000
sort(a, 0, len(a)-1)
print(a)
