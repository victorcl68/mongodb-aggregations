db.movies.aggregate([{ $match: { $and: [
  { "imdb.rating": { $gte: 7 } },
  { genres: { $not: { $in: ["Crime", "Horror"] } } },
  { rated: { $all: ["PG", "G"] } },
  { languages: { $in: ["English", "Spanish"] } }],
} }]);
