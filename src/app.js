import express from "express";
import connectMongoose from "./loaders/db.js";
import mainErrorHandler from "./loaders/mainErrorHandler.js";
import routes from "./loaders/routes.js";
import routesSettings from "./loaders/routesSettings.js";

const app = express();

// Init Routes Settings
routesSettings(app);
app.use("/api", routes);

// Connecting with Mongoose
await connectMongoose();

// Error Handeler (Any error will be propagated to this function to send a resposne):
mainErrorHandler(app);

export default app;
