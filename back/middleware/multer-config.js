const multer = require("multer");
const path = require('path')

var storage = multer.diskStorage({
  destination: './src/image/',
  filename: (req, file, cb) => {
    return cb(null, new Date().toISOString().replace(/[/\:]/g, "_") + file.originalname)
  },
});


module.exports = multer({ storage: storage }).single("image");
