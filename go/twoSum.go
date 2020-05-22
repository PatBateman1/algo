package main

func twoSum(nums []int, target int) []int {
    var m = make(map[int] int)
    
    for i, v := range nums {
        value, ok := m[target - v]
        if ok {
            ans := []int {value, i}
            return ans
        } else {
            m[v] = i
        }
    }
    return []int {0, 0}
}

func main() {
	
}