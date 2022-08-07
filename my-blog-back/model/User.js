const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 实例化数据模板
const USerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  token: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
    default: Date.now,
  },
  Category: {
    type: Boolean,
    required: true,
  },
  Archive: {
    type: Boolean,
    required: true,
  },
  Share: {
    type: Boolean,
    required: true,
  },
});

module.exports = user = mongoose.model("users", USerSchema);
