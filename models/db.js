const mongoose = require("mongoose");
const MONGODB_URI =
  "mongodb+srv://divi:divi@registrations.010fn.mongodb.net/registrations?retryWrites=true&w=majority";
require("./registrationModel");

try {
  mongoose.connect(
    MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("connected")
  );
  mongoose.set("useCreateIndex", true);
} catch (error) {
  console.log("could not connect");
}
