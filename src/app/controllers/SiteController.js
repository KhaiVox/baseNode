const { mutipleMongooseToObject } = require('../../util/mongoose')
// đây là lúc controller lấy dữ liệu từ models,
// dữ liệu vừa đc models lấy từ DB
const Course = require('../models/Course')

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('home', {
                    // map courses bằng 1 hàm ở ngoài
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController()
