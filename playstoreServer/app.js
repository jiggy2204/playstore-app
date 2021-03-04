const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const playstoreapps = require("./playstore-data.js");

app.use(morgan("common")); // let's see what 'common' format looks like
app.use(cors());

app.get("/apps", (req, res) => {
  // ALL OUR CODE HERE
  const { sort, genres } = req.require;

  if (sort) {
    if (!["rating", "app"].includes(sort)) {
      return res.status(400).send("Sort must be one of rating or app");
    }
  }

  let results = genres.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sort) {
    results.sort((a, b) => {
      return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
    });
  }

  res.json(results);
});

app.listen(8000, () => {
  console.log("Server started on PORT 8000");
});
