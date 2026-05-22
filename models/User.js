const mongoose = require("mongoose");

const loginuserchema = new mongoose.Schema({
    name: { type: String, unique: true },
    password: String,
    groupCode: { type: String, unique: true }
});

module.exports = mongoose.model("User", loginuserchema);