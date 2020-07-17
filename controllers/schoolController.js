const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const School = mongoose.model("School");

router.get("/", (req, res) => {
  res.render("events/addEdit");
});

router.post("/", (req, res) => {
  insertRecord(req, res);
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
  school.submittedEvents = submittedEvents;
  school.coinPart = allEvents.coinChecked == true ? req.body.coin : ["n", "n"];
  school.crinPart = allEvents.crinChecked == true ? req.body.crin : ["n", "n"];
  school.ppPart = allEvents.ppChecked == true ? req.body.pp : ["n", "n"];
  school.quizPart = allEvents.quizChecked == true ? req.body.quiz : ["n", "n"];
  console.log(school);
  school.save((err, doc) => {
    if (!err) {
      console.log(err, doc);
      res.redirect(`/register/${doc._id}`);
    } else {
      if (err.name == "ValidationError") {
        handleValidationError(err, req.body);
        res.render("events/addEdit", {
          fields: req.body,
          check: allEvents,
        });
      } else if (err.name == "MongoError" && err.code == 11000) {
        res.render("events/addEdit", {
          oyehoye: "School Already Registered!",
          fields: req.body,
          check: allEvents,
        });
      } else {
        console.log("Error registering school " + err.name);
      }
    }
    if (doc) {
      console.log("doc saved!");
    } else {
      console.log("doc not saved");
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
      case "submittedEvents":
        body["zeroEventsError"] = err.errors[field].message;
        break;
      default:
        break;
    }
  }
}

router.get("/:id", (req, res) => {
  School.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("events/thanks", {
        title: "School has been Registered!",
        school: doc,
      });
    }
  }).lean();
});

module.exports = router;
