const makeOrder = {
  type: "object",
  required: ["orderId", "customerId", "orderedBooks", "orderTotal"],
  properties: {
    orderId: { type: "number" },
    customerId: { type: "string" },
    orderedBooks: {
      type: "array",
      items: { type: "string" },
      minItems: 1,
    },
    orderDate: { type: "string", format: "date-time" },
    shippingDate: { type: "string", format: "date-time" },
    shippingAddress: {
      type: "object",
      properties: {
        street: { type: "string" },
        city: { type: "string" },
        postalCode: { type: "string" },
      },
      required: ["street", "city", "postalCode"],
    },
    orderStatus: {
      type: "string",
      enum: ["Pending", "Delivered", "Cancelled"],
    },
    orderTotal: { type: "number" },
    notes: { type: "string" },
  },
  additionalProperties: false,
};

export { makeOrder };
