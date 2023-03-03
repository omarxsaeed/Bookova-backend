import User from "./user.model.js";

async function addUser(data) {
  let res = await User.create(data);
  console.log(`data is here ${res}`);
  return res;
}

async function editUser(data) {
  let res = await User.updateOne({ _id: data.userId }, data);
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
  const res = await usersModel.findOne({ email });
  return res;
}

async function getUserById(id) {
  const res = await usersModel.findById(id);
  return res;
}

async function getUserByCode(verificationCode) {
  const res = await usersModel.findOne({ verificationCode });
  console.log(res);
  return res;
}

export { addUser, editUser, deleteUser, getAllUser, getUser, getUserById, getUserByCode };
