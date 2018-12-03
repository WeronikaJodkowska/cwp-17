const multer  = require('multer');
const path = require('path');
const uuidv1 = require('uuid/v1');

const helper = {};

helper.upload = multer({
    storage: multer.diskStorage({
        destination: '../uploads/pdf/',
        filename: (req, file, cb)=>{
            let fileName = uuidv1()+path.extname(file.originalname);
            cb(null, fileName);
        }
    }),
    fileFilter: function (req, file, cb) {
        if (file.mimetype !== 'application/pdf') {
            return cb(new Error(`${file.originalname}  has not pdf ext`));
        }
        cb(null, true);
    }
});

module.exports = helper;