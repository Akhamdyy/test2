var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
    console.log("hello I'm on the start page");
    res.render("index");
});

module.exports = { apps: [{
    script: "app.js",
    watch: ["server", "client"],
    // Delay between restart
    watch_delay: 1000,
    ignore_watch : ["node_modules", "client/img", "\\.git", "*.log"],
  }]
}
