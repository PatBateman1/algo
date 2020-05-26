func balancedStringSplit(s string) int {
    l, r, ans := 0, 0, 0
    for _, c := range s {     
        if c == 'R' {
            r++
        } else {
            l++
        }
        if r == l {
            r = 0
            l = 0
            ans ++
        }
    }
    return ans
}