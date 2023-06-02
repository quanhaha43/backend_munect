const TuongTac = require("../Model/TuongTac");

const listTuongTac = async (filter) => {
  const pipeline = [
    {
      $match: filter,
    },
    {
      $lookup: {
        from: "nguoi_dung",
        localField: "idNguoiDung",
        foreignField: "_id",
        as: "idNguoiDung",
      },
    },
    {
      $unwind: { path: "$idNguoiDung", preserveNullAndEmptyArrays: false },
    },
  ];
  return await TuongTac.aggregate(pipeline);
};

const themTuongTac = async (tuongTac) => {
  const newTuongTac = new TuongTac(tuongTac);
  return await newTuongTac.save();
};

module.exports = {
  listTuongTac,
  themTuongTac,
};
