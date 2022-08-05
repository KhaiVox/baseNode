const { mongooseToObject } = require('../../util/mongoose')

// đây là lúc controller lấy dữ liệu từ models,
// dữ liệu vừa đc models lấy từ DB
const Course = require('../models/Course')

class CoursesController {
    // GET /courses/:slug
    show(req, res, next) {
        // req.params.slug: chứa thông tin slug
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)
    }

    // GET /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // POST /courses/store
    store(req, res, next) {
        const formData = req.body
        // link ảnh kiểu của youtube
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course
            .save()
            // sau khi lưu thành công sẽ quay về trang chúng ta thiết lập bên dưới
            .then(() => res.redirect('/'))
            .catch((error) => {})
    }
}

module.exports = new CoursesController()
