# leetcode 148 sort list 


# merge sort time: O(nlogn) space: O(logn) 220ms
def sortList(self, head: ListNode) -> ListNode:
        # merge sort top-down
        if not head or not head.next:
            return head
        
        if not head.next.next:
            if head.val <= head.next.val:
                return head
            else:
                head.next.next = head
                head = head.next
                head.next.next = None
                return head
        
        # split
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        mid = slow.next
        slow.next = None
       
        # sort
        head = self.sortList(head)
        mid = self.sortList(mid)
        
        # merge
        if head.val <= mid.val:
            curr, ans, p1, p2 = head, head, head.next, mid
        else:
            curr, ans, p1, p2 = mid, mid, head, mid.next
        while p1 or p2:
            if p1 and p2:
                if p1.val < p2.val:
                    curr.next = p1
                    curr = p1
                    p1 = p1.next
                else:
                    curr.next = p2
                    curr = p2
                    p2 = p2.next
            elif not p1:
                curr.next = p2
                curr = p2
                p2 = p2.next
            else:
                curr.next = p1
                curr = p1
                p1 = p1.next
                
        return ans