const path = require('path');
const express = require('express');
const app = express();
const morgan =  require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");

const routes = require('./routes');
const auth = require("./config/auth");
const db =  require('./config/db');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")));

app.use(session({ secret: "omdb"}))
app.use(passport.initialize());
app.use(passport.session())

auth.setLocalStrategy("email");

app.use("/api", routes);


app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
  
db.sync({force:false})
.then(() => {
  app.listen(3000, () => {
    console.log("Servidor en puerto 3000")
  })
})
.catch(function (err) {
  console.error('Problem in the server')
  console.error(err);
});



