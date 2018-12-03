const multer  = require('multer');
const path = require('path');
const uuidv1 = require('uuid/v1');
const sharp = require('sharp');
const Promise = require('bluebird');

const helper = {};

helper.upload = multer({
    storage: multer.diskStorage({
        destination: '../uploads/images/',
        filename: (req, file, cb)=>{
            let fileName = uuidv1()+'-master'+path.extname(file.originalname);
            cb(null, fileName);
        }
    }),
    fileFilter: function (req, file, cb) {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
            cb(null, true);return;
        }
        return cb(new Error(`${file.originalname}  has not png/jpg ext`));
    }
});

helper.modifyFiles = function(firstImage){
    let files = [firstImage.filename, uuidv1()+'-preview'+path.extname(firstImage.originalname),
        uuidv1()+'-thumbnail'+path.extname(firstImage.originalname)];
    Promise.all([
        sharp(firstImage.path).resize(800, 600).toFile(`../uploads/images/${files[1]}`),
        sharp(firstImage.path).resize(300, 180).toFile(`../uploads/images/${files[2]}`)
    ]).catch(()=>{console.log('Error in resizing')});
    return files;
};

module.exports = helper;