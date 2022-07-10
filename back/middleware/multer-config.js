const multer = require("multer");

var storage = multer.diskStorage({
  destination: './src/image/',
  filename: (req, file, callback) => {
    return callback(null, `${file.originalname}`);
  },
});


module.exports = multer({ storage: storage }).single("image");
