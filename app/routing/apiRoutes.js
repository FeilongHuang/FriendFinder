var express = require("express");
var router = express.Router();
var path = require("path");
var friendsArray = require("../data/friends.js")
router.post("/api/friends", function (req, res) {
  //save the ajax post data to friendsArray
  friendsArray.push(req.body);
  //Here should be the function to compare the recent input with data 
  //saved in friendsArray,and find the best match one ,then use res.json to 
  //send the object back,and the function in the ajax post will use this 
  //data to show the best match one's name and photo.
  //Here I just send back the curent added one's data back, so it show the curent one's name.
  res.send(req.body);
  console.log(req.body);
});
router.get("/api/friends", function (req, res) {
  res.json(friendsArray);
})

module.exports = router;