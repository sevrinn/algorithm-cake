//push, pop, unshift, and shift
const foods = [
	{ food: 'raspberries', type: 'fruit' },
	{ food: 'orange', type: 'fruit' },
	{ food: 'broccoli', type: 'vegetable' },
	{ food: 'quinoa', type: 'grain' },
]
const blackBeans = { food: 'black beans', type: 'legume' }
const chiaSeeds = { food: 'chia seeds', type: 'seed' }

//challenge 1
//remove the last tiem in the foods array
foods.pop()
console.log(foods)

//challenge 2
//remove the first item in the foods array
foods.shift()
console.log(foods)

//challenge 3
//add the blackBeans var to the beginning of the foods array
foods.unshift(blackBeans)
console.log(foods)

//challenge 4
//add the chiaSeeds to the end of the array
//what does your final array look like?
foods.push(chiaSeeds)
console.log(foods)
