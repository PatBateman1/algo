// leetcode 1008 Construct Binary Search Tree from Preorder Traversal

// stack time: O(n) space: O(d)
function bstFromPreorder(preorder) {
    if (preorder.length == 0) return null;
    const ans = new TreeNode(preorder[0]);
    let stack = [[ans, Infinity]], length = preorder.length;
    for (let i = 1; i < length; i++) {
        const node = new TreeNode(preorder[i]);
        while ((stack[stack.length - 1][0].left && stack[stack.length - 1][0].right) || stack[stack.length - 1][1] < preorder[i]) {
            stack.pop();
        }
        if (preorder[i] < stack[stack.length - 1][0].val) {
            stack[stack.length - 1][0].left = node;
            stack.push([node, stack[stack.length - 1][0].val])
        } else {
            stack[stack.length - 1][0].right = node;
            stack.push([node, stack[stack.length - 1][1]]);
        }
    }    
    return ans;
};