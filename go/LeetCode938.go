func rangeSumBST(root *TreeNode, L int, R int) int {
    if root==nil {
		return 0
	}

	if root.Val < L {
		return rangeSumBST(root.Right,L,R)
	}

	if root.Val > R {
		return rangeSumBST(root.Left,L,R)
	}
	
	return root.Val + rangeSumBST(root.Right,L,R) + rangeSumBST(root.Left,L,R)
}