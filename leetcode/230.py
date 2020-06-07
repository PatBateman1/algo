# leetcode 230 Kth Smallest Element in a BST


# time: O(n) space: O(logn) 52ms
def kthSmallest(self, root: TreeNode, k: int) -> int:
    ans = None
    def helper(curr, node):
        nonlocal ans
        if not node or ans:
            return 0
        left = helper(curr, node.left)
        right = helper(1 + left + curr, node.right)
        if curr + left == k - 1:
            ans = node.val
        return 1 + left + right
    
    helper(0, root)
    return ans