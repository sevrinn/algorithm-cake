/**
 * Given an array of objects with integer properties startTIme and endTime, return a condensed array of objects, merging
 */

const mergeRanges = (arr) => {
  //we should sort the arr by the startTimes. In order to do that we must pass in a comparison func to sort
  arr.sort((a, b) => {
    return a.startTime - b.startTime
  })

  return arr
}

exampleArr = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]

console.log(mergeRanges(exampleArr))
