const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const baiVietService = require("../Service/BaiViet");
const tuongTacService = require("../Service/TuongTac");
const binhLuanService = require("../Service/BinhLuan");

const listBaiViet = async (req, res) => {
  try {
    let filter = {};

    const listBaiViet = await baiVietService.listBaiViet(filter);
    for (var i = 0; i < listBaiViet.length; i++) {
      var listTuongTac = await tuongTacService.listTuongTac({
        idBaiViet: new ObjectId(listBaiViet[i]._id),
      });
      var listBinhLuan = await binhLuanService.listBinhLuan({
        idBaiViet: new ObjectId(listBaiViet[i]._id),
      });
      listBaiViet[i].arr_tuongTac = listTuongTac;
      listBaiViet[i].arr_binhLuan = listBinhLuan;
    }
    console.log("listBaiViet: ", listBaiViet);

    res.status(200).json({
      success: true,
      data: {
        listBaiViet: listBaiViet,
        listTuongTac: listTuongTac,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `${error.message}`,
    });
  }
};

module.exports = {
  listBaiViet,
};
