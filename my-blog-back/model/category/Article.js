const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 文章分类名称
const ArticleSchema = new Schema({
  ArticleCategory: {
    type: String,
    required: true
  },
})

module.exports = Article = mongoose.model("Article", ArticleSchema)