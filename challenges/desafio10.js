db.trips.aggregate([
  {
    $group: {
      _id: "$usertype",
      duracao: {
        $avg: { $divide:
          [{ $subtract: ["$stopTime", "$startTime"] }, 3600000],
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      tipo: "$_id",
      duracaoMedia: {
        $round: ["$duracao", 2],
      },
    },
  },
  {
    $sort: { duracao: 1 },
  },
]);
