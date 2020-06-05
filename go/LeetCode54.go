func spiralOrder(matrix [][]int) []int {
    if len(matrix) == 0 || len(matrix[0]) == 0 {
        return nil
    }

    edge := []int {0, len(matrix[0])-1, len(matrix)-1, 0}
    ans := make([]int, len(matrix[0]) * len(matrix))
    num := 0
    for num < len(matrix[0]) * len(matrix) {
        for i := edge[3]; i <= edge[1] && edge[0] <= edge[2]; i++ {
            ans[num] = matrix[edge[0]][i]
            num++
        }
        edge[0]++

        for i := edge[0]; i <= edge[2] && edge[3] <= edge[1]; i++ {
            ans[num] = matrix[i][edge[1]]
            num++
        }
        edge[1]--

        for i := edge[1]; i >= edge[3] && edge[0] <= edge[2]; i-- {
            ans[num] = matrix[edge[2]][i]
            num++
        }
        edge[2]--

        for i := edge[2]; i >= edge[0] && edge[3] <= edge[1]; i-- {
            ans[num] = matrix[i][edge[3]]
            num++
        }
        edge[3]++
    }
    return ans
}