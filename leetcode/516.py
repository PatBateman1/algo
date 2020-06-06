# leetcode 516 Longest Palindromic Subsequence

# naive dp time O(n^2) space: O(n^2) 1860ms
def longestPalindromeSubseq(self, s: str) -> int:
    dp = [[0 for _ in range(len(s))] for _ in range(len(s))]
    
    for i in range(len(s)-1, -1, -1):
        for j in range(i, len(s)):
            if i == j:
                dp[i][j] = 1
                continue

            if s[i] == s[j]:
                dp[i][j] = dp[i + 1][j - 1] + 2
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])

    return dp[0][len(s) - 1]


# better dp time O(n^2) space: O(n) 1416ms
def longestPalindromeSubseq1(self, s: str) -> int:
    dp0 = [0 for _ in range(len(s))]
    dp1 = [0 for _ in range(len(s))]

    for i in range(len(s)-1, -1, -1):
        for j in range(i, len(s)):
            if i == j:
                dp0[j] = 1
                continue

            if s[i] == s[j]:
                dp0[j] = dp1[j - 1] + 2
            else:
                dp0[j] = max(dp1[j], dp0[j - 1])
        dp0, dp1 = dp1, dp0

    return dp1[-1]