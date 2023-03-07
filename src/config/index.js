import dotenv from "dotenv";
dotenv.config();

const config = {
  app: {
    port: process.env.PORT ?? 5000,
    host: process.env.HOST ?? "127.0.0.1",
  },
  db: {
    local: process.env.DB_LOCAL_URI,
    atlas: process.env.DB_PROD_URI,
  },
  jwt: {
    secret: process.env.JWT_EXPIRY_DATE,
    expiresIn: process.env.S3_BUCKET_NAME,
  },
  mail: {
    service: process.env.MAIL_SERVICE,
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
  },
};

export default config;
