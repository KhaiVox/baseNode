const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, required: true },
        level: { type: String },
        // unique: chỉ tồn tại 1 slug duy nhất, không cho giống nhau
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        // tự tạo thời gian mình cập nhật object
        timestamps: true,
    },
)

module.exports = mongoose.model('Course', Course)
