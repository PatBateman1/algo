# leetcode 1300 Sum of Mutated Array Closest to Target


# sort and binary search time: O(nlog(n)) space: O(1) 280ms
def findBestValue(self, arr: List[int], target: int) -> int:
    arr.sort()

    left, length, s, curr, ans = 0, len(arr), 0, target, 0
    for i in range(length):
        right = arr[i]
        while left <= right:
            mid = (left + right) // 2
            sub = target - s - (length - i) * mid
            if abs(sub) < abs(curr):
                curr = sub
                ans = mid
            elif abs(sub) == abs(curr):
                ans = min(ans, mid)
            if sub > 0:
                left = mid + 1
            elif sub < 0:
                right = mid - 1
            else:
                return mid
            
        if curr < 0:
            return ans
        s += arr[i]
       
    return ans


