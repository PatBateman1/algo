function eraseOverlapIntervals(intervals) {
	// greedy 
	// time: o(nlogn)
	// space: o(1)
	let ans = intervals.length;
	let border = -Infinity;
	if (ans === 0)
		return 0;
	intervals.sort((a, b) => {
		if (a[1] < b[1]) {
			return -1;
		} else if (a[1] == b[1]) {
			return 0;
		} else {
			return 1;
		}
	});

	for (let i=0; i<intervals.length; i++) {
		if (intervals[i][0] >= border) {
			border = intervals[1];
			ans--;
		}
	}

	return ans;
}