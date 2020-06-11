func dailyTemperatures(T []int) []int {
    stack := make([]int, 0)
    ans := make([]int, len(T))
    for i := len(T) - 1; i > -1; i-- {
        for len(stack) > 0 && T[stack[len(stack) - 1]] <= T[i] {
            stack = stack[0:len(stack)-1]
        }
        if len(stack) > 0 {
            ans[i] = stack[len(stack) - 1] - i
        }
        stack = append(stack, i)
    }
    return ans
}