const BinhLuan = require("../Model/BinhLuan");

const listBinhLuan = async (filter) => {
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
    return await BinhLuan.aggregate(pipeline);
};

module.exports = {
    listBinhLuan,
};
