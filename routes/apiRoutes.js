const db = require("../models")

module.exports = function(app) {

    app.post("/api/save-book", function (req, res) {
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

    app.get("/api/get-books", function(req, res) {
        db.Book.find({}).then(function(data) {
            res.json(data)
        }).catch(function(err) {
            console.log(err)
        })
    })

    app.delete("/api/delete-book/:id", function(req, res) {
        db.Book.findByIdAndRemove(req.params.id).then(function(data) {
            res.json(data)
        }).catch(function(err) {
            console.log(err)
        })
    })
    
}

