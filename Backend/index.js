const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const cors = require("cors");

const app = express();
const port = 8080;
app.use(cors());
// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://rohansharma1305:" +
      process.env.MONGO_PASSWORD +
      "@cluster1.r4zgofp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Error while connecting to MongoDB:", err);
  });

// Middleware
app.use(express.json());

// Passport JWT Strategy
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  User.findOne({ id: jwt_payload.sub }, function (err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
}));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoutes);

// Start the server
app.listen(port, () => {
  console.log("App is running on port " + port);
});
