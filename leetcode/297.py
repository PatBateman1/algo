# leetcode 297 Serialize and Deserialize Binary Tree


class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        from collections import deque
        queue = deque()
        queue.append(root)
        res = []
        while queue:
            curr = queue.popleft()
            if curr:
                queue.append(curr.left)
                queue.append(curr.right)
                res.append(str(curr.val))
            else:
                res.append("null")
        return "[" + ",".join(res) + "]"

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        tree = data[1:len(data)-1].split(",")
        if tree[0] == "null":
            return 
        from collections import deque
        queue = deque()
        root = TreeNode(int(tree[0]))
        queue.append(root)
        j, curr = 0, None
        for i in range(1, len(tree)):
            if tree[i] == "null":
                node = None
            else:
                node = TreeNode(int(tree[i]))
                queue.append(node)
            if j % 2 == 0:
                curr = queue.popleft()
                curr.left = node
            else:
                curr.right = node
            j += 1
        return root