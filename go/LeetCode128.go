func longestConsecutive(nums []int) int {
    memo := make(map[int] int)
    ans := 0
    for _, num := range nums {
        if _, ok := memo[num]; !ok {
            memo[num] = 1
            left, right := num, num
            if _, ok := memo[num - 1]; ok {
                left = num - memo[num - 1] 
                memo[num] += memo[num - 1]
            }
            if _, ok := memo[num + 1]; ok {
                right = num + memo[num + 1]
                memo[num] += memo[num + 1]
            }

            memo[left], memo[right] = memo[num], memo[num]
            if memo[num] > ans {
                ans = memo[num]
            }
        }
    }
    return ans
}