const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./route/route");
const app = express();
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
require("./passportSetup");

app.use(session({ secret: "FUAssignment" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const clusterLink =
  "mongodb+srv://SandeepDarshanam:9866203258Aa@cluster0.pr0hn.mongodb.net/SyngentaDatabase?retryWrites=true&w=majority";
mongoose
  .connect(clusterLink, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));
app.use("/", route);
app.listen(3010, function () {
  console.log("Express app running on port " + 3010);
});
