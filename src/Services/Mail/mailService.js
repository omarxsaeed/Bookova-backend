import nodemailer from "nodemailer";

exports.sendVerificationMail = (user, verificationCodeLifeTime) => {
  const transporter = nodemailer.createTransport({
    service: "google",
    auth: {
      user: user.email,
      pass: user.password,
    },
  });

  const content = {
    from: process.env.FROM_EMAIL,
    to: user.email,
    subject: "[Bookova]: Verification Code",
    // text: `You can verify your account using the code: ${user.verificationCode}`,
    text: `Hi! There, You have recently visited 
           our website and entered your email.
           Please use the given code to verify your email
           ${user.verificationCode} 
           Thanks`,
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
