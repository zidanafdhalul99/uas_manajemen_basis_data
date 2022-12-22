import express from "express";
import {
  getItems,
  getItemsById,
  saveItems,
  deleteItems,
  updateItems
} from "../controllers/ItemsControllers.js";
const router = express.Router();

router.get("/items", getItems);
router.get("/items/:id", getItemsById);
router.post("/items/", saveItems);
router.delete("/items/:id", deleteItems);
router.patch("/items/:id", updateItems);

export default router;
