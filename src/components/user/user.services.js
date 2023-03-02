import User from "./user.model.js";

async function addUser(data) {
  let res = await User.create(data);
  console.log(`data is here ${res}`);
  return res;
}

async function editUser(id, data) {
  let res = await User.updateOne({ _id: id }, data);
  return res;
}

async function deleteUser(id) {
  let res = await User.findByIdAndDelete(id);
  return res;
}

async function getAllUser() {
  let res = await User.find();
  return res;
}

async function getUser(email) {
  const user = await usersModel.findOne({ email });
  return user;
}

async function getUserByCode(verificationCode) {
  const user = await usersModel.findOne({ verificationCode });
  console.log(user);
  return user;
}

export default { addUser, editUser, deleteUser, getAllUser, getUser, getUserByCode };
