const multer  = require('multer');
const helper = {};

helper.storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

helper.upload = multer({ storage: helper.storage });

module.exports = helper;