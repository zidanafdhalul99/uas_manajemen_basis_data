import express from "express";
import {
  getOrders,
  getOrdersById,
  saveOrders,
  deleteOrders
} from "../controllers/OrdersControllers.js";
const router = express.Router();

router.get("/orders", getOrders);
router.get("/orders/:id", getOrdersById);
router.post("/orders/", saveOrders);
router.delete("/orders/:id", deleteOrders);

export default router;
