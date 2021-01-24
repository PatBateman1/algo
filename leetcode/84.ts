// leetcode 84. Largest Rectangle in Histogram
// greedy + monotonic queue
// time: o(n)
// space: o(n)

function largestRectangleArea(heights: number[]): number {
    if (heights.length === 0) return 0;
    const left: number[] = new Array(heights.length).fill(0);
    const right: number[] = new Array(heights.length).fill(0);
    let stack: number[] = [-1];
    let ans: number = heights[0];
    for (let i=0; i<heights.length; i++) {
     
        while (stack.length > 1 && heights[stack[stack.length - 1]] >= heights[i])
            stack.pop();
        left[i] = i - stack[stack.length - 1] - 1;
  
        stack.push(i);
    }
    
    stack = [heights.length];
    for (let i=heights.length-1; i>=0; i--) {
     
        while (stack.length > 1 && heights[stack[stack.length - 1]] > heights[i])
            stack.pop();
        right[i] = stack[stack.length - 1] - i - 1;

        stack.push(i);
    }

    for (let i=0; i<heights.length; i++) {
        const curr: number = (left[i] + right[i] + 1) * heights[i];
        ans = curr > ans ? curr : ans;
    }

    return ans;
};
