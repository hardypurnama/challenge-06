const multer = require("multer");
const storage = multer.memoryStorage();

const uploadMiddleware = multer({ storage }).single("image");
const dataUri = (req) => {
  const fileBase64 = req.file.buffer.toString("base64");
  return `data:${req.file.mimetype};base64,${fileBase64}`;
};

module.exports = {
  uploadMiddleware,
  dataUri,
};
