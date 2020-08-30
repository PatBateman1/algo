import sys
def perfect(inorder, dep):
    return construct(inorder, 0, dep)

def construct(inorder, dep, maxDep):
    if dep > maxDep: return -1
    if not inorder: return 0
    ans = sys.maxsize
    for i in range(len(inorder)):
        curr = inorder[i] * dep
        left = construct(inorder[:i], dep + 1, maxDep)
        right = construct(inorder[i+1:], dep + 1, maxDep)
        if left != -1 and right != -1:
            ans = min(ans, curr + left + right)
    return ans

print(perfect([7, 6, 5, 3, 1], 5))