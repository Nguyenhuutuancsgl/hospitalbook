const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

//các cấp con của /trangchủ ...
router.get('/search', siteController.search);

router.get('/', siteController.index);

module.exports = router;
