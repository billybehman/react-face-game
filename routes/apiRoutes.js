const db = require("../models")

module.exports = function(app) {

    app.post("/api/save-book", function (req, res) {
        console.log("hello")
        db.Book.create({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            link: req.body.link,
            imageLink: req.body.imageLink
        }).then(function(data) {
            res.json(data)
        }).catch(function(err) {
            console.log(err)
        })
    })
    
}

