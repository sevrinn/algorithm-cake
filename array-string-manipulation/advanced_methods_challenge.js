//map, filter, reduce, and flatmap
const movies = [
	{
		title: 'Avatar',
		year: '2009',
		rating: 'PG-13',
	},
	{
		title: 'I Am Legend',
		year: '2007',
		rating: 'R',
	},
	{
		title: '300',
		year: '2006',
		rating: 'PG-13',
	},
	{
		title: 'The Avengers',
		year: '2012',
		rating: 'PG-13',
	},
	{
		title: 'The Wolf of Wall Street',
		year: '2013',
		rating: 'R',
	},
]

//challenge 1
//create a new array that just contains the movie titles
const movieTitles = movies.map((movie) => movie.title)
console.log(movieTitles)

//challenge 2
//create a new array that contains only those movies that are PG-13
const isPg13 = movies.filter((movie) => movie.rating === 'PG-13')
console.log(isPg13)

//challege 3
//determine how many of the movies are rating R
const howManyRatedR = movies.reduce((acc, movie) => {
	if (movie.rating === 'R') {
		acc++
	}
	return acc
}, 0)
console.log('Rated R movies: ', howManyRatedR)
