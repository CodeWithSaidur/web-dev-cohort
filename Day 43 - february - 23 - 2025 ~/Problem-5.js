
let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  let average = total / movie.ratings.length;
  //   movie.ratings = average;
  //   return movie;
  return { title: movie.title, ratings: average.toFixed(2) };
});
console.log(averageRatings);
console.log(movieRatings);

[{ title: "Movie A", ratings: 3.3 }, {}];
