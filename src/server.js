import http from "http";

import app from "./app.js";
import config from "./config/index.js";

const PORT = config.app.port;
const HOST = config.app.host;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is live on http://${HOST}:${PORT}`);
});

export default server;
