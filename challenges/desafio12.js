db.trips.aggregate([
  {
    $group:
    {
      _id:
      {
        diaDaSemana: { $dayOfWeek: "$startTime" }, nomeEstacao: "$startStationName",
      },
      all: { $sum: 1 },
    },
  },
  { $sort: { all: -1 } }, { $limit: 1 },
  {
    $project:
    {
      nomeEstacao: "$_id.nomeEstacao",
      total: "$all",
      _id: 0,
    },
  },
]);
