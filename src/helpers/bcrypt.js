import bcrypt from "bcrypt";

const encryptPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

const comparePasswords = async (password, hashedPassword) => {
  const isTheSamePassword = await bcrypt.compare(password, hashedPassword);
  return isTheSamePassword;
};

export default { encryptPassword, comparePasswords };
