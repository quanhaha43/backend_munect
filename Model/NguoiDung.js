const mongoose = require('mongoose');

const NguoiDungSchema = mongoose.Schema(
  {
    taiKhoan: {
      type: String,
      required: true,
    },
    matKhau: {
      type: String,
      required: true,
    },
    hoTen: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    gioiTinh: {
      type: String,
      required: false,
    },
    sdt: {
      type: String,
      required: false,
    },
    queQuan: {
      type: String,
      required: false,
    },
    ngaySinh: {
      type: Date,
      required: true,
    },
    anhDaiDien: {
      type: String,
      required: false,
    },
    anhBia: {
      type: String,
      required: false,
    },
    arr_TheoDoi: {
      type: Array,
      required: true,
    },
    arr_NguoiTheoDoi: {
      type: Array,
      required: true,
    },
    arr_HoiNhom: {
      type: Array,
      required: true,
    },
  },
  { collection: 'nguoi_dung' }
);

module.exports = mongoose.model('NguoiDung', NguoiDungSchema);
