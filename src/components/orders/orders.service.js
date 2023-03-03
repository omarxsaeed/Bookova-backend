import Order from "./orders.model.js";

const getOrder = async (orderId) => {
  const order = await Order.findById({ _id: orderId });
  console.log(order);
  return order;
};

const getAllOrders = async () => {
  const orders = await Order.find();
  return orders;
};

const makeOrder = async (orderInfo) => {
  const order = await Order.create(orderInfo);
  return order;
};

export { getOrder, makeOrder, getAllOrders };
