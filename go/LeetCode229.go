func majorityElement(nums []int) []int {
    if len(nums) == 0 {
        return nil
    }

    var c1, n1 = nums[0], 0
    var c2, n2 = nums[0], 0
    var res = make([]int, 0)

    for _, num := range nums {
        if num == c1 {
            n1++
            continue
        }

        if num == c2 {
            n2++
            continue
        }

        if n1 == 0 {
            c1 = num
            n1 = 1
            continue
        }

        if n2 == 0 {
            c2 = num
            n2 = 1
            continue
        }

        n1--
        n2--
    }

    var count1, count2 int = 0, 0
    for _, num := range nums {
        if num == c1 {
            count1++
        }

        if num == c2 {
            count2++
        }
    }

    if count1 > len(nums) / 3 {
        res = append(res, c1)
    }

    if (c2 != c1 && count2 > len(nums) / 3) || (len(res) == 0 && count2 > len(nums) / 3) {
        res = append(res, c2)
    }

    return res
    
}