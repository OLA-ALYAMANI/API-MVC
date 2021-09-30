const express = require("express")
const mongoose = require("mongoose")
const indexRoutes = require("./router/index.routes")

app = express()

// app.get("/", (req, res) => {
//     res.json({message: "Hello world"})
// })

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/blogs', {
    useNewUelParser: true
})

app.use("/", indexRoutes)

app.listen(3000, () => {
    console.log("express has started at 3000!")
})