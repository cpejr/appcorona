const multer = require('multer');
const path = require('path');
const appDir = path.dirname(require.main.filename);

const storage = multer.diskStorage({
  destination: `${appDir}/../../public`,
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const multerImageUploader = multer({
  storage: storage,
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
      cb(null, true);
    else cb({ error: 'File type not allowed' }, false);
  }
});

const imageUpload = (imageName) => {
  return (req, res, next) => {
    multerImageUploader.single(imageName)(req, res, function(err) {
      if (err) {
        //TODO melhorar essa mensagem de erro!
        return res.status(500).json(err);
      }
      next();
    });
  };
};

module.exports = imageUpload;
