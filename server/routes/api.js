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
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
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
});

router.get('/details/:id', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log('Req details of post');
  post.findById(req.params.id)
    .exec(function (err, post) {
      if (err) {
        console.log('err get the post')
      } else {
        res.json(post);
        console.log(post);
      }
    })
});


router.post('/posts', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log('posting');
  let newPost = new post();
  newPost.title = req.body.title;
  newPost.description = req.body.description;
  newPost.url = req.body.url;
  newPost.save(function (err, addNewPost) {
    if (err){
      console.log('err to insert post')
    } else {
      res.json(addNewPost)
    }
  })
});

module.exports = router;
