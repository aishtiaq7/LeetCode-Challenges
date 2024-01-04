console.clear();

/*
    TUT: https://javascript.plainenglish.io/javascript-algorithms-meeting-rooms-leetcode-2385465b92f0

*/

function canAttendMeeting(intervals) {
  const arr = intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < arr.length; i += 1) {
    // console.log("i:",i);
    // console.log("arr[i][0]:",arr[i][0]);
    // console.log("arr[i - 1][1]",arr[i - 1][1]);

    if (arr[i][0] < arr[i - 1][1]) return false; //check that each meeting ends before the new one starts:
  }

  return true;
}

const testingArray = [
  [1, 5],
  [10, 15],
  [22, 30],
];

console.log("testingArray:", testingArray);

canAttendMeeting(testingArray);
