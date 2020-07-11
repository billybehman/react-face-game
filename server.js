const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose")
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

// mongodb:user1password1@ds125871.mlab.com:25871/heroku_0xn0jnk7

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/3001";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

// Define API routes here
require("./routes/apiRoutes")(app);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
