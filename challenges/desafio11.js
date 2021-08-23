db.trips.aggregate([
  {
    $group:
    {
      _id: { $dayOfWeek: "$startTime" },
      dias: { $sum: 1 },
    },
  },
  {
    $project:
    {
      _id: 0,
      diaDaSemana: "$_id",
      total: "$dias",
    },
  },
  { $sort: { total: -1 } }, { $limit: 1 },
]);
