var express = require('express');
var router = express.Router();
var NguoiDungController = require("../Controller/NguoiDung");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login/:account', NguoiDungController.dangNhap );

router.post('/signup', NguoiDungController.dangKy);

module.exports = router;
