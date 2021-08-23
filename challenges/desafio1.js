db.movies.aggregate([{ $match: { $and: [
  { "imdb.rating": { $gte: 7 } },
  { genres: { $ne: { $in: ["Crime", "Horror"] } } },
  { rated: { $all: ["PG", "G"] } },
  { languages: { $in: ["English", "Spanish"] } }],
} }]);
