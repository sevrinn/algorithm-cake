/**
 * Given an array of objects with integer properties startTIme and endTime, return a condensed array of objects, merging meetings
 * that overlap
 *
 * input: array of meetings\
 * output: condensed array of meetings
 */

const mergeRanges = (arr) => {
	// create deep clone of the meetings array (this might not be the best way to make a deep clone but for this it's fine)
	const meetingsCopy = JSON.parse(JSON.stringify(arr))

	//we should sort the arr by the startTimes so that meetings that need to be sorted are next to eachother
	const sortedMeetings = arr.sort((a, b) => {
		return a.startTime - b.startTime
	})

	//now that the meetings are sorted, we want to check if meeting times overlap.
	//so we need to initialize mergedMeetings as the first meeting in the sorted list
	const mergedMeetings = [sortedMeetings[0]]

	//then we have to loop the remaining sorted meetings,
	// they overlap if start time of current meeting is lt or equal to the end time of last merged meeting

	for (let i = 1; i < sortedMeetings.length; i++) {
		const currentMeeting = sortedMeetings[i]
		const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]

		//if current meeting overlaps with last merged meeting, use later (larger) end time of the two
		if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
			lastMergedMeeting.endTime = Math.max(
				lastMergedMeeting.endTime,
				currentMeeting.endTime
			)
		} else {
			//otherwise add the current meeting because it doesnt overlap
			mergedMeetings.push(currentMeeting)
		}
	}

	// return mergedMeetings
	return mergedMeetings
}

exampleArr = [
	{ startTime: 0, endTime: 1 },
	{ startTime: 3, endTime: 5 },
	{ startTime: 4, endTime: 8 },
	{ startTime: 10, endTime: 12 },
	{ startTime: 9, endTime: 10 },
]

console.log(mergeRanges(exampleArr))
