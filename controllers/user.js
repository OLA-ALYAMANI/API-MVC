const User = require("../models/user.model")

module.exports = {
    index:(req, res) => {
        User.find({})
        .then(users => {
            res.json(users)
        })
        .catch(error => {
            res.json({error: error})
        })
    }
}