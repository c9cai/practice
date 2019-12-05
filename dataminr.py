def buildingHeights(N, buildings, heights):
  d = {buildings[i] - 1: heights[i] for i in range(len(buildings))}
  lst = [0] * N
  for i in range(1, N):
      if i in d and d[i] <= lst[i-1]:
          lst[i] = d[i]
      else:
          lst[i] = lst[i-1] + 1

  print(lst)

  for i in range(N - 2, -1, -1):
      if lst[i] > lst[i + 1] + 1:
          lst[i] = lst[i + 1] + 1

  print(lst)
  return max(lst)

buildingHeights(10, [3,8], [1,1])