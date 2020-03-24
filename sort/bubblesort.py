def sort(arr):
	"""
	bubble sort
	"""
	for j in range(len(arr)):
		for i in range(len(arr)-j-1):
			if arr[i] > arr[i+1]:
				arr[i], arr[i+1] = arr[i+1], arr[i]



a = [6,5,4,3,2,1,6,5,4,3,2,1,3]

sort(a)

print(a)