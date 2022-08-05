module.exports = {
    // với nhiều object
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject())
    },
    //  với 1 object duy nhất (cho trang detail)
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    },
}
