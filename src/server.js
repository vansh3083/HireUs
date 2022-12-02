const express = require('express');
const hbs = require("hbs");
const app = express();
const routes = require('./routes/main')
const mongoose = require("mongoose")
const login1 = require("./models/login")
const bodyParser = require("body-parser");
app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("Views/partials")
app.use('/static', express.static("public"))
app.use('', routes)

mongoose.connect("mongodb://localhost:27017/Hireus", () => {
    console.log("database connected")
    const notesSchema = {
        username: String,
        Emailid: String,
        password: String




    }
    const Note = mongoose.model("Note", notesSchema)



})

app.listen(process.env.PORT | 8080, () => {
    console.log("server started")
})