def maxRect(heights):
    heights = heights + [0]
    stack = [-1]
    maxHeight = 0
    for i in range(len(heights)):
        while heights[i] < heights[stack[-1]]:
            prevIndex = stack.pop()
            maxHeight = max(maxHeight, heights[prevIndex] * (i - stack[-1] - 1))
        stack.append(i)
    return maxHeight
                            
print(maxRect([1,8,6,2,5,4,8,3,7]))