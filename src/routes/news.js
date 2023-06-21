const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

//các cấp con của /news/quocte,trending ...
router.use('/:slug', newsController.show);

router.use('/', newsController.index);

module.exports = router;
