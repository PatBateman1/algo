// leetcode 144 Binary Tree Preorder Traversal

// preorder
// recursive time: O(n) space: O(d)
function preorderTraversal(root) {
    let ans = [];
    helper(root, ans);
    return ans;
}

function helper(node, ans) {
    if (!node) return;
    ans.push(node.val);
    helper(node.left, ans);
    helper(node.right, ans);
}

// stack time: O(n) space: O(d) never stack overflow
function preorderTraversalStack(root) {
    if (!root) return [];
    let stack = [root], ans = [];
    while (stack.length > 0) {
        const node = stack.pop();
        ans.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return ans
}

// inorder
// stack time: O(n) space: O(d)
function inorderTraversal(root) {
    if (!root) return [];
    let stack = [root], ans = [];
    while (stack.length > 0) {
        const node = stack.pop();
        if (node instanceof TreeNode) {
            if (node.right) stack.push(node.right);
            stack.push(node.val);
            if (node.left) stack.push(node.left);
        } else {
            ans.push(node);
        }
    }
    return ans;
}

// postorder
// stack time O(n) space: O(d)
function postorderTraversal(root) {
    if (!root) return [];
    let stack = [root], ans = [];
    while (stack.length > 0) {
        const node = stack.pop();
        if (node instanceof TreeNode) {
            stack.push(node.val);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        } else {
            ans.push(node);
        }
    }
    return ans;
}