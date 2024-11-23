const bodyParser = require('body-parser');
const multer = require('multer');



//File Uploading
function FileUpload() {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            return cb(null, '../uploads');
        },
        filename: function (req, file, cb) {
            return cb(null, `${Date.now()}-${file.originalname}`);
        },
    })



    const fileFilter = function (req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Only JPEG and PNG files are allowed'), false);
        }
    };



    const upload = multer({
        storage,
        fileFilter,
        limits: {
            fileSize: 5 * 1024 * 1024 // 5 MB limit
        }
    });
}

module.exports = { FileUpload };