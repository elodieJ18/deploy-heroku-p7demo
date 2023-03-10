const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');


// Multer config
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'samples',
      format: async (req, file) => ('png', "jpg", "jpeg"),// supports promises as well
      public_id: (req, file) => 'computed-filename-using-request',
    },
  });


module.exports = multer({ storage: storage });