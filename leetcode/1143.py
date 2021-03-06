# leetcode 1143 Longest Common Subsequence

# dp time: O(mn) space: O(mn)
def longestCommonSubsequence(text1: str, text2: str) -> int:
    dp = [[0 for _ in range(len(text2) + 1)] for _ in range(len(text1) + 1)]
    for i in range(len(text1)):
        for j in range(len(text2)):
            if text1[i] == text2[j]:
                dp[i + 1][j + 1] = dp[i][j] + 1
            else:
                dp[i + 1][j + 1] = max(dp[i][j + 1], dp[i + 1][j])
    return dp[-1][-1]


def longestCommonString(text1: str, text2: str) -> int:
    dp = [[0 for _ in range(len(text2) + 1)] for _ in range(len(text1) + 1)]
    ans = 0
    for i in range(len(text1)):
        for j in range(len(text2)):
            if text1[i] == text2[j]:
                dp[i + 1][j + 1] = dp[i][j] + 1
            ans = max(ans, dp[i + 1][j + 1])
    return ans