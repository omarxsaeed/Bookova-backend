import respondWith from "../../utils/response.js";

const upload = (req, res) => {
  const data = {
    name: req.file.originalname,
    url: req.file.location,
  };
  return respondWith(200, data, "Upload successful!", true, res);
};

export { upload };
