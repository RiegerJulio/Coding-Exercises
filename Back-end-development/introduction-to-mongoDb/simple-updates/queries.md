use('class');

db.movies.find()

// Altere o imdbRating para 7.7 no filme Batman.

db.movies.update(
  { title: 'Batman' },
  { $set: { imdbRating: 7.7 } }
)

// Altere budget para 1 no filme Godzilla.

db.movies.update(
  { title: 'Godzilla' },
  { $set: { budget: 1 } }
)

// Altere budget para 15 e imdbRating para 5.5 no filme Home Alone.

db.movies.update(
  { title: 'Home Alone' },
  { $set: { budget: 15, imdbRating: 5.5 } }
)

//  Aumente em 5 o budget do filme Home Alone.

db.movies.update(
  { title: 'Home Alone' },
  { $inc: { budget: 5 } }
)