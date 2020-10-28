const Profile = require('../models/profile');

exports.getAll = (req, res) => {
    Profile.find()
        .select('-__v')
        .exec()
        .then(doc => {
            res.status(200).json({
                message: "success",
                people: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                people: err
            })
        })
}

exports.findProfile = (req, res) => {
    const queryName = req.query.name
    Profile.find({ "name": { $regex: queryName, $options: '$i' } })
        .then(doc => {
            res.status(200).json({
                message: "success",
                people: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                people: err
            })
        })
}

exports.getById = (req, res) => {
    Profile.find({ _id: req.params.id })
        .select('-__v')
        .exec()
        .then(doc => {
            res.status(200).json({
                message: "success",
                people: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data",
                people: err
            })
        })
}

exports.createNew = (req, res) => {
    const newPerson = new Profile({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        phone: req.body.phone
    })

    console.log(req.body)

    newPerson.save()
        .then(doc => {
            res.status(200).json({
                message: "success",
                person: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while saving data",
                error: err
            })
        })
}

exports.updateProfileById = (req, res) => {
    const updateObject = req.body

    Profile.findByIdAndUpdate({ _id: req.params.id }, updateObject)
        .then(doc => {
            res.status(200).json({
                message: "success",
                person: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while updating data",
                error: err
            })
        })
}

exports.deleteProfile = (req, res) => {
    Profile.findByIdAndDelete({ _id: req.params.id })
        .exec()
        .then(doc => {
            res.status(200).json({
                message: "success",
                person: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while deleting data",
                error: err
            })
        })
}