import multer from "multer";

const s3 = new S3Client();

const localStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./src/uploads");
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()} - ${file.originalname}`;
    cb(null, fileName);
  },
});

const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png"];
const MAX_FILE_SIZE_IN_MB = 5;

const upload = multer({
  storage: localStorage,
  fileFilter: (req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Only JPEG and PNG images are allowed."));
  },
  limits: {
    fileSize: 1024 * 1024 * MAX_FILE_SIZE_IN_MB,
  },
});

export default upload;
