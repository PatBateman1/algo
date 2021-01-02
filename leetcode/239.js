// leetcode 239. Sliding Window Maximum
// monotonic queue
// time: o(n) on average
// space: o(n)

class MonotonicQueue {
	constructor(maxLength) {
		this.maxLength = maxLength;
		this.deque = new Deque();
	}

	add(val, idx) {
		const node = new Node(null, null, val, idx);
		let tail = this.deque.sentinel.prev;
		while (tail !== this.deque.sentinel && tail.val < val) {
			tail = tail.prev;
			this.deque.deleteBack();
		}

		this.deque.insertBack(node);

        while (this.deque.length > this.maxLength || idx - this.deque.sentinel.next.idx > this.maxLength - 1) 
			this.deque.deleteFront();
	}

	top() {
		const node = this.deque.sentinel.next;
		if (this.deque.sentinel === node)
			return null;

		return node.val;
	}
}

class Deque {
	constructor() {
		this.sentinel = new Node(null, null, null, null);
		this.sentinel.setPrev(this.sentinel);
		this.sentinel.setNext(this.sentinel);
		this.length = 0;
	}

	insertFront(node) {
		const next = this.sentinel.next;
		node.setPrev(this.sentinel);
		node.setNext(next);
		this.sentinel.setNext(node);
		next.setPrev(node);
		this.length++;
	}

	insertBack(node) {
		const prev = this.sentinel.prev;
		node.setPrev(prev);
		node.setNext(this.sentinel);
		this.sentinel.setPrev(node);
		prev.setNext(node);
		this.length++;
	}

	deleteFront() {
		if (this.sentinel.next === this.sentinel)
			return;

		const next = this.sentinel.next;
		this.sentinel.setNext(next.next);
		this.sentinel.next.setPrev(this.sentinel);
		this.length--;
	}

	deleteBack() {
		if (this.sentinel.prev === this.sentinel)
			return;
		
		const prev = this.sentinel.prev;
		this.sentinel.setPrev(prev.prev);
		this.sentinel.prev.setNext(this.sentinel);
		this.length--;
	}
}

class Node {
	constructor(prev, next, val, idx) {
		this.val = val;
		this.prev = prev;
		this.next = next;
		this.idx = idx;
	}

	setPrev(node) {
		this.prev = node;
	}

	setNext(node) {
		this.next = node;
	}
}

function maxSlidingWindow(nums, k) {
	const queue = new MonotonicQueue(k);
	const ans = [];
	for (let i=0; i<k-1; i++) {
		queue.add(nums[i], i);
	}
	for (let j=k-1; j<nums.length; j++) {
		queue.add(nums[j], j);
		ans.push(queue.top());
	}
	return ans;
}
