// leetcode 189. Rotate Array
// time: o(n)
// space: o(1)

function rotate(nums, k) {
	let split;
	k = k % nums.length;
	split = nums.length - k - 1;
	helper(nums, 0, split);
	helper(nums, split + 1, nums.length - 1);
	helper(nums, 0, nums.length - 1);
}

function helper(nums, start, end) {
    while (start < end) {
		const tmp = nums[start];
		nums[start] = nums[end];
		nums[end] = tmp;
		start++;
		end--;
	}
}
