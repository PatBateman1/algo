# leetcode 143 Reorder List 

# time: O(n) space: O(1) 92ms
def reorderList(self, head: ListNode) -> None:
    """
    Do not return anything, modify head in-place instead.
    """
    if not head or not head.next: return 
    
    # find the middle
    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    mid = slow.next
    slow.next = None
    
    # reverse the second part
    c, n, p = mid, mid.next, None
    while n:
        c.next = p
        p = c
        c = n
        n = n.next
    c.next = p
    
    # concat the two parts
    p1, p2 = head, c
    while p1 and p2:
        n1, n2 = p1.next, p2.next
        p1.next = p2
        p2.next = n1
        p1 = n1
        p2 = n2