import respondWith from "../../utils/response.js";

const upload = (req, res) => {
  const data = req.files.map((file) => ({
    name: file.originalname,
    url: file.location,
  }));
  return respondWith(200, data, "Upload successful!", true, res);
};

export { upload };
