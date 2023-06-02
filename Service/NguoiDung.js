const NguoiDung = require("../Model/NguoiDung");

const getNguoiDung = async (filter) => {
    const pipeline = [
        {
            $match: filter,
        },
    ];
    return await NguoiDung.aggregate(pipeline);
};

const themNguoiDung = async (account) => {
    const newAccount = new NguoiDung(account);
    return await newAccount.save();
};

module.exports = {
    getNguoiDung,
    themNguoiDung
};
