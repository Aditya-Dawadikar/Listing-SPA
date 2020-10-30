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
    bloodGroup: {
        type: String,
        required: [true, 'Blood group is required'],
        enum: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-', ]
    },
    phone: {
        type: Number,
        required: [true, 'Phone number is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    birthDate: {
        type: Date,
        required: [true, 'Birth Date is required']
    }
})

module.exports = mongoose.model('Profile', profileSchema)