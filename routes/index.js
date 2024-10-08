const express = require('express');
const router = express.Router();
const controller = require("../controllers/index");

/* GET home page. */
router.get('/', controller.getMessagesList);
router.get("/new", controller.getNewMessage); 
router.post("/new", controller.postNewMessage);

module.exports = router;
