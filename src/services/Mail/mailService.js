import nodemailer from "nodemailer";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import config from "../../config/index.js";

const sendVerificationMail = (user, verificationCodeLifeTime) => {
  const transporter = nodemailer.createTransport({
    service: config.mail.service,
    auth: {
      user: config.mail.username,
      pass: config.mail.password,
    },
  });

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const source = fs.readFileSync(path.join(__dirname, "./Templates/confirmEmail.handlebars"), "utf8");
  const compiledTemplate = handlebars.compile(source);

  const content = {
    from: config.mail.username,
    to: user.email,
    subject: "[Bookova 📖]: Verification Code",
    html: compiledTemplate({
      verificationCode: user.verificationCode,
      verificationCodeLifeTime,
    }),
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(content, (err, info) => {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        console.log("Mail sent successfully!");
        resolve(info);
      }
    });
  });
};

export default sendVerificationMail;
