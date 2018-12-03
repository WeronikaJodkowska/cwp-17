const express = require('express');
const router = express.Router();
const helper = require('./../helpers/upload');

router.post('/', helper.upload.single('file'), (req, res, next) => {
    res.json({ succeed: true });
});

module.exports = router;