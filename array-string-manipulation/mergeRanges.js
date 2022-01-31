/**
 * Given an array of objects with integer properties startTIme and endTime, return a condensed array of objects, merging
 */

const mergeRanges = (arr) => {
  // create deep clone of the meetings array
  const meetingsCopy = JSON.parse(JSON.stringify(arr))

  console.log(meetingsCopy)
  // //we probably dont want to exert any effort if there isnt more than one meeting
  // if (arr.length < 2) {
  //   return arr
  // }
  // //we should sort the arr by the startTimes. In order to do that we must pass in a comparison func to sort
  // arr.sort((a, b) => {
  //   return a.startTime - b.startTime
  // })

  // //now that the meetings are sorted, we want to check if meeting times overlap.
  // //we need to set a the lastMeeting to equal the last item in meetings arr
  // // let lastMeeting = arr[arr.length - 1]
  // //then we have to loop the remaing meetings, they overlap if the first if endtime of current meeting is gt starttime of currentMeeting + 1

  // for (let i = 0; i < arr.length; i++) {
  //   let currentMeeting = arr[i]
  //   let nextMeeting = arr[i+1]

  //   console.log('hello')

  //   if (nextMeeting) {
  //         if (currentMeeting.endTime >= nextMeeting.startTime) {
  //           currentMeeting.endTime = nextMeeting.endTime
  //            return arr.slice(next, arr[i+2])
  //         }

  //   }

  // }

  // return arr
}

exampleArr = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]

console.log(mergeRanges(exampleArr))
