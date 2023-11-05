const { model, Schema } = require("mongoose");

const AccountScema = Schema({
  username: String,
  funds: Number,
});

module.exports = model("Account", AccountScema);
