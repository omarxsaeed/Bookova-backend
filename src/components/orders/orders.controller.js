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

    // make an order
    let order = await ordersService.makeOrder(orderInfo);
    order = await order.populate("orderedBooks");
    // change the state of each book in the order
    order.orderedBooks.forEach((book) => {
      // Update the availability of the book
      switch (book.availability) {
        case "In Stock":
          book.availability = "Out of Stock";
          break;
        case "Available for borrowing":
          book.availability = "Borrowed";
          break;
        case "Available for donation":
          book.availability = "Donated";
          break;
      }
      book.save(); // Save the updated book to the database
    });
    return respondWith(201, {}, `You just made an order with no. ${order._id} successfully!`, true, res);
  } catch (err) {
    next(err);
  }
};

export { getOrder, getAllOrders, makeOrder };
