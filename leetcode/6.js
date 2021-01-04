// leetcode 6. ZigZag Conversion
// time: o(n)
// space: o(n)

function convert(s, numRows) {
    if (numRows === 1 || numRows >= s.length)
        return s;
    
    const ans = new Array(numRows).fill('');

    for (let i=0; i<s.length; i++) {
        const idx = Math.floor(i / (numRows - 1)) % 2 === 0 ? i % (numRows - 1) : numRows - i % (numRows - 1) - 1;
        ans[idx] += s[i];

    }

    return ans.join('');
};