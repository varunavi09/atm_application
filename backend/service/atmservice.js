const Account = require("../models/account");

const getBalance = async (accountNumber) => {
  return await Account.findOne({ accountNumber });
};

module.exports = {
  getBalance
};