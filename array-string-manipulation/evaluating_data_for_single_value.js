const bowlingScores = [154, 204, 300, 184, 286]

const includesScore = bowlingScores.includes(300)
console.log(includesScore)

const someScores = bowlingScores.some((score) => score < 150)
console.log(someScores)

const everyScore = bowlingScores.every((score) => score % 2 === 0)
console.log(everyScore)
