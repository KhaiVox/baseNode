const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

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

// Add plugin
mongoose.plugin(slug)
// deleteAt: tự động thêm thời gian xóa
// overrideMethods: ẩn những item đã được xóa mềm
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' })

module.exports = mongoose.model('Course', Course)
