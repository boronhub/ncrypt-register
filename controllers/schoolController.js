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
  school.coinPart = req.body.coin;
  eventsToList = (v) => [].concat(v).map((name) => name);
  submittedEvents = eventsToList(req.body.events);
  allEvents = {
    coinChecked: false,
    crinChecked: false,
    ppChecked: false,
    quizChecked: false,
  };
  submittedEvents.forEach((element) => {
    switch (element) {
      case "coin":
        allEvents.coinChecked = true;
        break;
      case "crin":
        allEvents.crinChecked = true;
      case "pp":
        allEvents.ppChecked = true;
      case "quiz":
        allEvents.quizChecked = true;
      default:
        break;
    }
  });
  school.allEvents = allEvents;
  school.crinPart = req.body.crin;
  school.ppPart = req.body.pp;
  school.quizPart = req.body.quiz;
  school.save((err, doc) => {
    if (!err) res.redirect("register/thanks");
    else {
      if (err.name == "ValidationError") {
        handleValidationError(err, req.body);
        res.render("events/addEdit", {
          event: "nCrypt 2020 Interschool Registration",
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
      case "quizPart":
        body["quizPartError"] = err.errors[field].message;
        break;
      case "ppPart":
        body["ppPartError"] = err.errors[field].message;
        break;
      default:
        break;
    }
  }
}

router.get("/thanks", (req, res) => {
  School.find((err, docs) => {
    if (!err) {
      res.render("events/thanks", {
        response: docs,
      });
    } else {
      console.log("Error in retrieving response: " + err);
    }
  });
});

module.exports = router;
