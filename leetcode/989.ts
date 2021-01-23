// leetcode 989. Add to Array-Form of Integer
// time: o(n)
// space: o(n)

function addToArrayForm(A: number[], K: number): number[] {
    const ans: number[] = [];
    const nums: number[] = Array.from(A).reverse();
    let over: number = 0;
    let idx: number = 0;
    
    while(K || over) {
        const curr: number = K % 10;
        const n: number = nums[idx] ? nums[idx] : 0;
        const num: number = (curr + n + over) % 10;
        over = Math.floor((curr + n + over) / 10);
        nums[idx] = num;
        idx++;
        K = Math.floor(K / 10);
    }

    return nums.reverse();
};
