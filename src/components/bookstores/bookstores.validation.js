const addBookstore = {
  type: "object",
  properties: {
    name: { type: "string" },
    owner: { type: "string", minLength: 1 },
    location: {
      type: "object",
      properties: {
        type: { type: "string", enum: ["Point"] },
        coordinates: {
          type: "array",
          items: { type: "number" },
          minItems: 2,
          maxItems: 2,
        },
        formattedAddress: { type: "string" },
      },
      required: ["type", "coordinates"],
    },
    contact: {
      type: "object",
      properties: {
        phone: { type: "string" },
        email: { type: "string", format: "email" },
        website: { type: "string" },
      },
      required: ["phone"],
    },
    address: { type: "string" },
  },
  required: ["name", "location", "contact", "address"],
};
