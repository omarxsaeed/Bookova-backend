import respondWith from "../../utils/response.js";
import * as ordersService from "./orders.service.js";

const getOrder = async (req, res, next) => {
  try {
    const { orderId } = req.body;
    const order = await ordersService.getOrder(orderId);
    return respondWith(200, order, "The order you asked for.", true, res);
  } catch (err) {
    next(err);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await ordersService.getAllOrders();
    return respondWith(200, orders, "These are all the orders you made so far!.", true, res);
  } catch (err) {
    next(err);
  }
};

const makeOrder = async (req, res, next) => {
  try {
    const orderInfo = req.body;
    const order = await ordersService.makeOrder(orderInfo);
    return respondWith(201, {}, `You just made an order with no. ${order._id} successfully!`, true, res);
  } catch (err) {
    next(err);
  }
};

export { getOrder, getAllOrders, makeOrder };
