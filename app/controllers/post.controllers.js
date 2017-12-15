var Post = require('mongoose').model('Post');
var path = require("path");

exports.getAll = (req, res, next) => {
    Post.find((err, data) => {
        if (err) {
            console.log('Failure: ' + err);
            return next(err);
        }
        else {
            console.log(data);
            res.json(data);
        }
    }).sort({ time: 'desc' });;
}

exports.create = (req, res, next) => {
    var post = new Post(req.body);
    post.save(function (err) {
        if (err) {
            console.log('Failure');
            return next(err);
        }
        else {
            console.log('Success');
            res.json(post);
        }
    });
}

exports.deletePost = (req, res, next) => {
    Post.findByIdAndRemove({ _id: req.params.id }, req.body, (err, post) => {
        if (err) {
            return next(err);
        } else {
            res.json(post);
        }
    });
}


