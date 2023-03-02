const addUser = {
  type: "object",
  required: ["fname", "lname", "email", "password", "nId", "picture", "address", "phone"],
  properties: {
    fname: { type: "string" },
    lname: { type: "string" },
    email: { type: "string", format: "email" },
    password: { type: "string", minimum: 8 },
    nId: { type: "string" },
    picture: { type: "string" },
    address: {
      city: { type: "string" },
      street: { type: "string" },
    },
    phone: { type: "string" },
  },
  additionalProperties: false,
};

const editUser = {
  type: "object",
  required: ["userId"],
  properties: {
    userId: { type: "string" },
    fname: { type: "string" },
    lname: { type: "string" },
    email: { type: "string", format: "email" },
    password: { type: "string", minimum: 8 },
    picture: { type: "string" },
    address: {
      city: { type: "string" },
      street: { type: "string" },
    },
    phone: { type: "string" },
  },
};

const deleteUser = {
  type: "object",
  properties: {
    userId: { type: "string" },
  },
};

export { addUser, editUser, deleteUser };
