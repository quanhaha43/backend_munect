var express = require("express");
var BaiVietController = require("../Controller/BaiViet");
var TuongTacController = require("../Controller/TuongTac");
var router = express.Router();

router.get("/listBaiViet", BaiVietController.listBaiViet);

router.post("/tuongtac", TuongTacController.like_or_dislike);

module.exports = router;
