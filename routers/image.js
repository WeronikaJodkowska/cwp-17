const express = require('express');
const router = express.Router();
const helper = require('./../helpers/image');

router.post('/', helper.upload.single('image'), async (req, res, next) => {
    res.json({images: helper.modifyFiles(req.file)});
});

module.exports = router;