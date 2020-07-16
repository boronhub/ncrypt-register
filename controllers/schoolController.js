const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const School = mongoose.model("School");

router.get("/", (req, res) => {
  res.render("events/addEdit", {
    event: "nCrypt 2020 Interschool Registration",
  });
});

router.post("/", (req, res) => {
  insertRecord(req, res);
  // console.log(req.body)
});

function insertRecord(req, res) {
  var school = new School();
  school.schoolName = req.body.sname;
  school.teacherName = req.body.tname;
  school.teacherEmail = req.body.temail;
  school.teacherPhone = req.body.tphone;
  eventsToList = (v) => [].concat(v).map((name) => name);
  submittedEvents = eventsToList(req.body.events);
  allEvents = {
    coinChecked: false,
    crinChecked: false,
    ppChecked: false,
    quizChecked: false,
  };
  submittedEvents.forEach((element) => {
    if (element === "coin") {
      allEvents.coinChecked = true;
    } else if (element === "crin") {
      allEvents.crinChecked = true;
    } else if (element === "prog") {
      allEvents.ppChecked = true;
    } else if (element === "quiz") {
      allEvents.quizChecked = true;
    }
  });
  school.allEvents = allEvents;
  school.coinPart = allEvents.coinChecked == true ? req.body.coin : ["n", "n"];
  school.crinPart = allEvents.crinChecked == true ? req.body.crin : ["n", "n"];
  school.ppPart = allEvents.ppChecked == true ? req.body.pp : ["n", "n"];
  school.quizPart = allEvents.quizChecked == true ? req.body.quiz : ["n", "n"];
  school.save((err, doc) => {
    if (!err) res.redirect(`/register/${doc._id}`);
    else {
      if (err.name == "ValidationError") {
        handleValidationError(err, req.body);
        res.render("events/addEdit", {
          event: "nCrypt 2020 Interschool Registration",
          fields: req.body,
          check: allEvents,
        });
      } else if (err.name == "MongoError" && err.code == 11000) {
        res.render("events/addEdit", {
          event: "School Already Registered",
          fields: req.body,
          check: allEvents,
        });
      } else {
        console.log("Error registering school " + err);
      }
    }
  });
}

function handleValidationError(err, body) {
  for (field in err.errors) {
    switch (err.errors[field].path) {
      case "schoolName":
        body["schoolNameError"] = err.errors[field].message;
        break;
      case "teacherName":
        body["teacherNameError"] = err.errors[field].message;
        break;
      case "teacherEmail":
        body["teacherEmailError"] = err.errors[field].message;
        break;
      case "teacherPhone":
        body["teacherPhoneError"] = err.errors[field].message;
        break;
      case "coinPart":
        body["coinPartError"] = err.errors[field].message;
        break;
      case "crinPart":
        body["crinPartError"] = err.errors[field].message;
        break;
      case "ppPart":
        body["ppPartError"] = err.errors[field].message;
        break;
      case "quizPart":
        body["quizPartError"] = err.errors[field].message;
        break;
      default:
        break;
    }
  }
}

router.get("/:id", (req, res) => {
  School.findById(req.params.id,(err,doc)=>{
    if (!err){
      res.render("events/thanks",{
        title:"School has been Registered!",
        school:doc
      })
    }
  })
});

module.exports = router;
