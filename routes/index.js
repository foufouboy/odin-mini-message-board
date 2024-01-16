const express = require('express');
const router = express.Router();
const title = "Mini Message Board"
const messages = [
    {
        text: "Hi there!",
        user: "Armando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
    {
        text: "Grrrrah. Grrraaaah, graaaah! (Hi. I'm a Gyarados.)",
        user: "Gyarados",
        added: new Date(),
    },
    {
        text: "I'll be the pirate king!!",
        user: "Monkey D. Luffy",
        added: new Date(),
    },
    {
        text: "See ya space cowboy.",
        user: "Spike Spiegel",
        added: new Date(),
    },
]

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
        title: title,
        messages: messages,
    });
});

router.get("/new", function(req, res, next) {
    res.render("new", {title: title});  
});

router.post("/new", function(req, res, next) {
    messages.unshift({
        text: req.body["input-Message"],
        user: req.body["input-Name"],
        date: new Date(),
    });
    res.redirect("/");   
});

module.exports = router;
