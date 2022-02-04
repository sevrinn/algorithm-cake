//Sort, Reverse, Find, FindIndex
const students = [
	{ name: 'John', grade: 75 },
	{ name: 'Jane', grade: 93 },
	{ name: 'Samantha', grade: 90 },
	{ name: 'Michael', grade: 94 },
]

//challenge question #1
//sort array of stuents based on their grade
//in descending order
const sortedStudents = [...students]
sortedStudents.sort((a, b) => b.grade - a.grade)

//challenge question #2
//after sorting array, reverse order of array
sortedStudents.reverse()

// challenge question #3
//find a student in the array who has a grade over 90
const overNinety = sortedStudents.find((student) => student.grade > 90)
console.log(overNinety)
