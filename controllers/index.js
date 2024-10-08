const storage = require("../db/queries");

module.exports = {
    getMessagesList: async (req, res) => {
        const messages = await storage.getAllMessages();
        res.render("index", {
            title: "Mini Message Board",
            messages: messages,
        });
    },

    getNewMessage: (req, res) => {
        res.render("new", {
            title: "Mini Message Board",
        });
    },

    postNewMessage: async (req, res) => {
        const { username, message } = req.body;

        // No error checking because i'm lazy

        await storage.addMessage(username, message);
        res.redirect("/");
    }
}