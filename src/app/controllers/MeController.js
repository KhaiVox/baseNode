const { mutipleMongooseToObject } = require('../../util/mongoose')
const Course = require('../models/Course')

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
        .then(([courses, deletedCount]) => {
            res.render('me/stored-courses', {
                deletedCount,
                courses: mutipleMongooseToObject(courses),
            })
        })
        .catch(next)
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        // findDeleted: render ra danh sách khóa học đã xóa
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next)
    }
}

module.exports = new MeController()
