const express = require('express');
const router = express.Router();
const helper = require('./../helpers/pdf');

router.post('/', helper.upload.array('files', 3), (req, res, next) => {
    let files = req.files.map((file)=>file.filename);
    res.json({files: files});
});

module.exports = router;