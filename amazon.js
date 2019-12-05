//https://leetcode.com/discuss/interview-question/373202
function getPairs(A, B, target) {
  A.sort((a, b) => a[1] - b[1]);
  B.sort((a, b) => a[1] - b[1]);

  let res = [];
  let max = -Infinity;
  let l = 0;
  let r = B.length - 1;

  while (l < A.length && r >= 0) {
    let sum = A[l][1] + B[r][1];
    if (sum > target) {
      r--;
    } else {
      if (max <= sum) {
        if (max < sum) {
          max = sum;
          res = [];
        }
        res.push([A[l][0], B[r][0]]);
        let i = r - 1;
        while (i >= 0 && B[i][1] === B[i + 1][1]) {
          res.push([A[l][0], B[i][0]]);
          i--;
        }
      }
      l++;
    }
  }
  return res;
}

console.log(getPairs([[1, 8], [2, 7], [3, 14]], [[1, 5], [2, 10], [3, 14]], 20));
console.log(getPairs([[1, 8], [2, 15], [3, 9]], [[1, 8], [2, 11], [3, 12]], 20));


//https://leetcode.com/discuss/interview-question/313719/Amazon-or-Online-Assessment-2019-or-Movies-on-Flight
(function main(movies, d) {
    if(!movies || !movies.length || d < 30) return [];
    let n = movies.length,
        i = 0,
        j = n - 1;
    let res = { a: 0, b: 0 }, max = -1;
    
    while(i < j) {
        let sum = movies[i] + movies[j];
        if(sum <= d - 30) {
            if(sum > max) {
                res.a = movies[i];
                res.b = movies[j];
                max = sum;
            }
            i++;
        } else {
            j--;
        }
    }
    if(max === -1) return [];
    console.log([res.a, res.b]);
    return [res.a, res.b];
}([90, 85, 75, 60, 120, 150, 125], 250));

function find2Sum(nums, target) {
  target -= 30;
  const map = new Map();
  let max = -Infinity;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const diff = target - n;
    if (map.has(diff)) {
      if (n > max || diff > max) {
        res = [map.get(diff), i];
        max = Math.max(n, diff);
      }
    }
    map.set(n, i);
  }
  return res;
}