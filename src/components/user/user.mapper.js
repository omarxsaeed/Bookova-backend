export const buildUserResponseDTO = (user) => ({
  id: user._id,
  firstName: user.fname,
  lastName: user.lname,
  email: user.email,
  emailVerified: Boolean(user.isVerified),
  picture: user.picture,
  isAdmin: Boolean(user.isAdmin),
});
