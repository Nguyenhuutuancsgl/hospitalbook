const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

//các cấp con của /news/quocte,trending ...
router.get('/:slug', newsController.show);

router.get('/', newsController.index);

module.exports = router;
