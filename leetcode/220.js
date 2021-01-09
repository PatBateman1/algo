
// leetcode 220. Contains Duplicate III
// bucket
// time: o(n)
// space: o(n)

function containsNearbyAlmostDuplicate(nums, k, t) {
    if (k <=0 && t < 0)
        return false;
    
    const bucket = {};
    for (let i=0; i<nums.length; i++) {
        const idx = Math.floor(nums[i] / (t + 1));

        if (bucket[idx] !== undefined)
            return true;
          
        bucket[idx] = nums[i];

        if (bucket[idx - 1] !== undefined && Math.abs(bucket[idx - 1] - nums[i]) <= t)
            return true
        if (bucket[idx + 1] !== undefined && Math.abs(bucket[idx + 1] - nums[i]) <= t)
            return true
        
        if (i >= k)
            bucket[Math.floor(nums[i - k] / (t + 1))] = undefined;
    }
    return false;
};
