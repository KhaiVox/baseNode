const meRouter = require('./me')
const newRouter = require('./news')
const coursesRouter = require('./courses')
const siteRouter = require('./site')

function route(app) {
    // nếu các tuyến đường bên trên ko match -> chạy tuyến đường bên dưới cùng
    app.use('/news', newRouter)
    app.use('/me', meRouter)
    app.use('/courses', coursesRouter)
    app.use('/', siteRouter)
}

module.exports = route
