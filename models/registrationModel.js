const mongoose = require("mongoose");

var schoolSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: "Required.",
    unique: true,
  },
  teacherName: {
    type: String,
    required: "Required.",
  },
  teacherEmail: {
    type: String,
    required: "Required.",
  },
  teacherPhone: {
    type: String,
    required: "Required.",
  },
  studentName: {
    type: String,
    required: "Required.",
  },
  studentEmail: {
    type: String,
    required: "Required.",
  },
  studentPhone: {
    type: String,
    required: "Required.",
  },
  coinPart: [
    {
      type: String,
    },
  ],
  crinPart: [
    {
      type: String,
    },
  ],
  ppPart: [
    {
      type: String,
    },
  ],
  quizPart: [
    {
      type: String,
    },
  ],
  submittedEvents: [
    {
      type: String,
    },
  ],
});

schoolSchema.path("submittedEvents").validate((list) => {
  return list[0] !== undefined;
}, "Please Register for atleast one event");

schoolSchema.path("coinPart").validate((list) => {
  list[0] = list[0].trim();
  list[1] = list[1].trim();
  return list[0] !== "" && list[1] !== "";
}, "Please Register atleast two participants for code-in.");

schoolSchema.path("crinPart").validate((list) => {
  list[0] = list[0].trim();
  list[1] = list[1].trim();
  return list[0] !== "" && list[1] !== "";
}, "Please Register atleast two participants for create-in.");

schoolSchema.path("ppPart").validate((list) => {
  list[0] = list[0].trim();
  list[1] = list[1].trim();
  return list[0] !== "" && list[1] !== "";
}, "Please Register atleast two participants for Programming.");

schoolSchema.path("quizPart").validate((list) => {
  list[0] = list[0].trim();
  list[1] = list[1].trim();
  return list[0] !== "" && list[1] !== "";
}, "Please Register atleast two participants for quiz.");

schoolSchema.path("teacherEmail").validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, "Please enter a valid email address.");

schoolSchema.path("studentEmail").validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, "Please enter a valid email address.");

schoolSchema.path("teacherPhone").validate((val) => {
  phoneRegex = /^[7-9]{1}[0-9]{9}$/;
  return phoneRegex.test(val);
}, "Please enter a valid Phone Number");

schoolSchema.path("studentPhone").validate((val) => {
  phoneRegex = /^[7-9]{1}[0-9]{9}$/;
  return phoneRegex.test(val);
}, "Please enter a valid Phone Number");

mongoose.model("School", schoolSchema);
