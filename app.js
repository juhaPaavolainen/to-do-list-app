const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');


app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();

  var day = "";

const daysOfTheWeek = {
    "0": "Sunday",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday"
  }
  day = daysOfTheWeek[currentDay];


  res.render("list", {
    kindOfDay: day
  });
});

app.listen(3000, function() {
  console.log("Server up and running on port 3000.");
});
