const makeOrder = {
  type: "object",
  required: ["orderId", "customerId", "orderedBooks", "orderDate"],
  properties: {
    orderId: { type: "string" },
    customerId: { type: "string" },
    orderedBooks: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { type: "string" },
          author: { type: "string" },
          price: { type: "number" },
          quantity: { type: "number" },
        },
        required: ["title", "author", "price", "quantity"],
      },
    },
    orderDate: { type: "string", format: "date-time" },
    shippingDate: { type: "string", format: "date-time" },
    shippingAddress: {
      type: "object",
      properties: {
        street: { type: "string" },
        city: { type: "string" },
        state: { type: "string" },
        postalCode: { type: "string" },
      },
      required: ["street", "city", "state", "postalCode"],
    },
    orderStatus: { type: "string" },
    orderTotal: { type: "number" },
    notes: { type: "string" },
  },
  additionalProperties: false,
};

export { makeOrder };
