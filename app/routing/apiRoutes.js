var express = require("express");
var router = express.Router();
var path = require("path");
var friendsArray = require("../data/friends.js")
router.post("/api/friends", function (req, res) {
  console.log(req.body);
  var totalDifference = 0;
  var totalDifferenceArray = [];
  var newUserDataArray = req.body.scores;
  console.log("newUserDataArray:" + newUserDataArray);
  //loop over the friendsArray,put all totaldifference in an array
  for (var a = 0; a < friendsArray.length; a++) {

    for (var i = 0; i < newUserDataArray.length; i++) {
      if (newUserDataArray[i] > friendsArray[a].scores[i]) {
        totalDifference += newUserDataArray[i] - friendsArray[a].scores[i];
      } else {
        totalDifference += friendsArray[a].scores[i] - newUserDataArray[i];
      }
    }
    totalDifferenceArray.push(totalDifference);
    totalDifference = 0;
  }
  //find the minimun totaldifference and its index
  console.log("totalDifferenceArray:" + totalDifferenceArray);
  var minTotalDifference = Math.min.apply(Math, totalDifferenceArray);
  console.log("minTotalDifference:" + minTotalDifference);
  var indexOfBestMatch = totalDifferenceArray.indexOf(minTotalDifference);
  //send the best match friend back to user
  res.json(friendsArray[indexOfBestMatch]);
  friendsArray.push(req.body);

});
router.get("/api/friends", function (req, res) {
  res.json(friendsArray);
})

module.exports = router;