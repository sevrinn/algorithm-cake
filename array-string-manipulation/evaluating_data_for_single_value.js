//Inclues, Every, Some
const bowlingScores = [154, 204, 300, 184, 286]

//challenge question 1
//does the array of bowling scores include a 300?
const includesThreeHundo = bowlingScores.includes(300)
console.log(includesThreeHundo)

// challenge question 2
// are some of the scores under 150?
const underOneFifty = bowlingScores.some((score) => score < 150)
console.log(underOneFifty)
//challenge question 3
// is every score an even number?
const areAllEven = bowlingScores.every((score) => score % 2 === 0)
console.log(areAllEven)
