const express = require('express');
const { route } = require('express/lib/application');
const login = require("../models/login")
const routes = express.Router();

routes.get("/", async(req, res) => {
    const logins = await login.findOne({ "_id": "638848439bd51143bf09bb0b" })
    console.log(logins)
    res.render("index", {
        logins: logins
    })
})
routes.get('/gallery', (req, res) => {
    res.render("gallery")
})
routes.get('/aftersigninexecutive', (req, res) => {
    res.render("aftersigninexecutive")
})
routes.get('/signup', (req, res) => {
    res.render("signup")
})


module.exports = routes