// leetcode 72. Edit Distance
// dp 120ms
// time: o(mn)
// space: o(mn)

function minDistance(word1, word2) {
    let dp = new Array(word1.length+1);

    for (let i=0; i<word1.length+1; i++)
        dp[i] = new Array(word2.length+1);

    for (let i=0; i<word1.length+1; i++)
        dp[i][0] = i;
    
    for (let i=0; i<word2.length+1; i++)
        dp[0][i] = i;
    
    for (let i=0; i<word1.length; i++) {
        for (let j=0; j<word2.length; j++) {
            if (word1[i] === word2[j]) {
                dp[i+1][j+1] = dp[i][j];
            } else {
                dp[i+1][j+1] = 1 + Math.min(dp[i][j+1], dp[i+1][j], dp[i][j]);
            }
        }
    }

    return dp[word1.length][word2.length];
};
