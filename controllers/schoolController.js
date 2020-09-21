const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const School = mongoose.model("School");
const { body } = require("express-validator");

router.get("/", (req, res) => {
  res.render("events/addEdit");
});

router.post(
  "/",
  [
    body("schoolName").not().isEmpty().escape().trim(),
    body("teacherName").not().isEmpty().escape().trim(),
    body("studentName").not().isEmpty().escape().trim(),
    body("teacherEmail").not().isEmpty().escape().trim().normalizeEmail(),
    body("studentEmail").not().isEmpty().escape().trim().normalizeEmail(),
  ],
  (req, res) => {
    insertRecord(req, res);
  }
);

function insertRecord(req, res) {
  var school = new School();
  school.schoolName = req.body.sname.toLowerCase();
  school.teacherName = req.body.tname;
  school.teacherEmail = req.body.temail;
  school.teacherPhone = req.body.tphone;
  school.studentName = req.body.stname;
  school.studentEmail = req.body.stemail;
  school.studentPhone = req.body.stphone;
  eventsToList = (v) => [].concat(v).map((name) => name);
  submittedEvents = eventsToList(req.body.events);
  allEvents = {};
  submittedEvents.forEach((element) => {
    if (element === "coin") {
      allEvents.coinChecked = true;
    } else if (element === "crin") {
      allEvents.crinChecked = true;
    } else if (element === "prog") {
      allEvents.ppChecked = true;
    } else if (element === "quiz") {
      allEvents.quizChecked = true;
    } else if (element === "game") {
      allEvents.gameChecked = true;
    } else if (element === "surp") {
      allEvents.surpChecked = true;
    } else if (element === "film") {
      allEvents.filmChecked = true;
    } else if (element === "photo") {
      allEvents.photoChecked = true;
    } else if (element === "ardu") {
      allEvents.arduChecked = true;
    } else if (element === "am") {
      allEvents.amChecked = true;
    } else if (element === "gd") {
      allEvents.gdChecked = true;
    }
  });
  school.submittedEvents = submittedEvents;
  school.coinPart = allEvents.coinChecked == true ? req.body.coin : ["n", "n"];
  school.crinPart =
    allEvents.crinChecked == true
      ? req.body.crin
      : ["n", "n", "n", "n", "n", "n"];
  school.ppPart =
    allEvents.ppChecked == true ? req.body.pp : ["n", "n", "n", "n", "n", "n"];
  school.gamePart =
    allEvents.gameChecked == true ? req.body.game : ["n", "n", "n", "n"];
  school.surpPart =
    allEvents.surpChecked == true ? req.body.surp : ["n", "n", "n", "n"];
  school.filmPart =
    allEvents.filmChecked == true ? req.body.film : ["n", "n", "n", "n"];
  school.photoPart =
    allEvents.photoChecked == true ? req.body.photo : ["n", "n", "n", "n"];
  school.arduPart =
    allEvents.arduChecked == true ? req.body.ardu : ["n", "n", "n", "n"];
  school.amPart =
    allEvents.amChecked == true ? req.body.am : ["n", "n", "n", "n"];
  school.quizPart = allEvents.quizChecked == true ? req.body.quiz : ["n", "n"];
  school.gdPart =
    allEvents.gdChecked == true ? req.body.gd : ["n", "n", "n", "n"];
  school.save((err, doc) => {
    if (!err) {
      res.redirect(`/${doc._id}`);
    } else {
      if (err.name == "ValidationError") {
        console.log(req.body);
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
      case "studentName":
        body["studentNameError"] = err.errors[field].message;
        break;
      case "studentEmail":
        body["studentEmailError"] = err.errors[field].message;
        break;
      case "studentPhone":
        body["studentPhoneError"] = err.errors[field].message;
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
      case "surpPart":
        body["surpPartError"] = err.errors[field].message;
        break;
      case "filmPart":
        body["filmPartError"] = err.errors[field].message;
        break;
      case "photoPart":
        body["photoPartError"] = err.errors[field].message;
        break;
      case "arduPart":
        body["arduPartError"] = err.errors[field].message;
        break;
      case "amPart":
        body["amPartError"] = err.errors[field].message;
        break;
      case "gdPart":
        body["gdPartError"] = err.errors[field].message;
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
//todo:change pw
