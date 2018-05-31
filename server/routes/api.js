const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');


const db = "mongodb://dache:zcnht2015@ds141720.mlab.com:41720/codepostfoma";

// mongoose.Promise = global.Promise;

mongoose.connect(db, function (err) {
    if (err) {
        console.log('connect error');
    }
});

router.get('/posts', function (err, res) {
    console.log('Req posts');
    post.find({})
        .exec(function (err, posts) {
            if (err) {
                console.log('err get the posts')
            } else {
                res.json(posts);
                console.log(posts);
            }
        })
})


module.exports = router;