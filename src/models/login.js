const mongoose = require("mongoose");
const login = mongoose.Schema({
    brandName: String,
    links: [{
        label: String,
        url: String
    }]


})

module.exports = mongoose.model("login", login)