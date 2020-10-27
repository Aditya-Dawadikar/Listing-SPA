const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    phone: {
        type: Number,
        required: [true, 'Phone number is required']
    }
})

module.exports = mongoose.model('Profile', profileSchema)