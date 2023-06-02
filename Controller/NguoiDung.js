const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const nguoiDungService = require("../Service/NguoiDung");

const dangNhap = async (req, res) => {
  try {
    console.log("Param: ", req.params.account);
    let filter = { taiKhoan: req.params.account };

    const nguoiDung = await nguoiDungService.getNguoiDung(filter);
    console.log("getNguoiDung: ", nguoiDung);
    if (nguoiDung.length != 1) {
      return res.status(301).json({
        success: false,
        message: `Không tìm thấy account!`,
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        nguoiDung: nguoiDung[0],
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `${error.message}`,
    });
  }
};

const dangKy = async (req, res) => {
  try {
    console.log("Body: ", req.body);
    const { taiKhoan, matKhau, email, ngaySinh } = req.body;
    if (taiKhoan == null) {
      return res.status(301).json({
        success: false,
        message: `Tài khoản không được để trống !`,
      });
    }
    if (matKhau == null) {
      return res.status(301).json({
        success: false,
        message: `Mật khẩu không được để trống !`,
      });
    }
    if (email == null) {
      return res.status(301).json({
        success: false,
        message: `Email không được để trống !`,
      });
    }
    if (ngaySinh == null) {
      return res.status(301).json({
        success: false,
        message: `Ngày sinh không được để trống !`,
      });
    }
    const nguoiDung = await nguoiDungService.getNguoiDung({
      taiKhoan: taiKhoan,
    });
    if (nguoiDung.length != 0) {
      return res.status(301).json({
        success: false,
        message: `Tài khoản đã tồn tại !`,
      });
    }
    const newAccount = {
      taiKhoan,
      matKhau,
      email,
      ngaySinh,
      arr_TheoDoi: [],
      arr_NguoiTheoDoi: [],
      arr_HoiNhom: [],
    };
    const dangKy = await nguoiDungService.themNguoiDung(newAccount);
    if (!dangKy) {
      return res.status(301).json({
        success: false,
        message: `Đăng ký thất bại !`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Đăng ký thành công !`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `${error.message}`,
    });
  }
};

module.exports = {
  dangNhap,
  dangKy,
};
