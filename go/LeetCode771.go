func numJewelsInStones(J string, S string) int {
    set := make(map[byte] int)
    var ans int = 0
    for _, c := range J {
        set[byte(c)] = 1
    }
    for _, c := range S {
        if _, hasChar := set[byte(c)]; hasChar {
            ans++
        }
    }
    return ans
}