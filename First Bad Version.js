isBadVersion = function (version) {
  const badVersion = 3; // change this to test other cases than 4.
  return version >= badVersion;
};

/*
    Unoppimized solutoin. 
    Time complexity:    O(n)
    Space complexity:   O(1)

*/
// var solution = function (isBadVersion) {
//   return function (n) {
//     for (let i = 0; i <= n; i++) {
//       if (isBadVersion(i)) {
//         return i;
//       }
//     }
//   };
// };


/*
    OPTIMAL SOLUTION solutoin. 
    Time complexity:    O(logn)
    Space complexity:   O(1)

*/
var solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;
    let mid = -1;
    while (left < right) {
      mid = left + Math.floor((right - left) / 2);
    //   console.log("mid:", mid);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};

console.clear();
const n = 10;
var findFirstBadVersion = solution(isBadVersion);
console.log("findFirstBadVersion(n):", findFirstBadVersion(n));
