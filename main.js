"use strict"

const { appendFile } = require("fs");

const express = require("express"),
 app = express(),
 errorController = require("./controllers/errorController"),
 homeController = require("./controllers/homeController"),
 subscribersController = require("./controllers/subscribersController"),
 layouts = require("express-ejs-layouts"),
 mongoose = require("mongoose"),
 Subscriber = require("./models/subscriber");

mongoose.connect("mongodb+srv://it231:Kbnr2001@final-it-231.dsefw.mongodb.net/macguver?retryWrites=true&w=majority")
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

var myQuery = Subscriber.findOne({
  name: "RAJ"
}).where("email", /patel/);

myQuery.exec((error, data) => {
  if (data) console.log(data.name);
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(homeController.logRequestPaths);

app.get("/name", homeController.respondWithName);
app.get("/items/:estate", homeController.sendReqParam);

app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
  res.render("subscribers", { subscribers: req.data});
});

app.get("/", homeController.index);
app.get("/about", homeController.showAbout);
app.get("/career", homeController.showCareer);
app.get("/featuredproperties", homeController.showFeaturedproperties);
app.get("/realestateagents", homeController.showRealestateagents);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);