var path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

// Connect to DB
db.connect()

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

app.use(methodOverride('_method'))

// Static file
// có thể truy cập http://localhost:3000/img/logo.jpg để thấy ảnh trong 'public'
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes init
route(app)

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`)
})
