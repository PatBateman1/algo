# leetcode 1028 Recover a Tree From Preorder Traversal


# stack time: O(n) space: O(n) 76ms
def recoverFromPreorder(self, S: str) -> TreeNode:
    root = None
    stack, currDep, curr, prev = [], 0, 0, 0
    while curr < len(S):
        prev = curr
        while curr < len(S) and S[curr] != "-":
            curr += 1
        currNode = TreeNode(int(S[prev:curr]))
        if currDep == 0:
            root = currNode
        while stack and stack[-1][1] >= currDep:
            stack.pop()
        if stack:
            if stack[-1][0].left:
                stack[-1][0].right = currNode
            else:
                stack[-1][0].left = currNode
        stack.append((currNode, currDep))
        prev = curr
        while curr < len(S) and S[curr] == "-":
            curr += 1
        currDep = curr - prev
    return root