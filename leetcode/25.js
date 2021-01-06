// leetcode 25. Reverse Nodes in k-Group
// time: o(n)
// space: o(1)

function reverseKGroup(head, k) {
    const ans = new ListNode(0, head);
    let start = head, prev = ans, count = 0;

    while (head && k>1) {
        let next = head.next;
        count++;
        if (count === k) {
            reverse(start, prev, next);
            prev = start;
            start = next;
            count = 0;
        }

        head = next;
    }

    return ans.next;
};

function reverse(head, prevNode, nextNode) {
    let next = nextNode;
    while (head && head !== nextNode) {
        const n = head.next;
        head.next = next;
        next = head;
        head = n;
    }
    prevNode.next = next;
}