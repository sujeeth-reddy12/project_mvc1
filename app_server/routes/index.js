var express = require('express');
var router = express.Router();

/* GET home page. */
var ctrlMain = require('../controllers/main');
/* GET homepage. */
router.get('/', ctrlMain.index);
module.exports = router;