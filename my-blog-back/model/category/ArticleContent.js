const mongoose = require("mongoose");
const dayjs = require("dayjs");
const Schema = mongoose.Schema;
var date = new Date();
const currentDate = dayjs(date).format("YYYY-MM-DD HH:mm")
// 文章内容
const ArticleContentSchema = new Schema({
  ArticleCategory: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
    default: currentDate,
  },
});

module.exports = ArticleContent = mongoose.model(
  "ArticleContent",
  ArticleContentSchema
);
