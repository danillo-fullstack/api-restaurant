import { Router } from "express";
import { OrdersController } from "@/controllers/orders-controller.js";

const ordersRouters = Router();
const ordersController = new OrdersController();

ordersRouters.post("/", ordersController.create);
ordersRouters.get("/table-session/:table_session_id", ordersController.index);
ordersRouters.get(
  "/table-session/:table_session_id/total",
  ordersController.show,
);

export { ordersRouters };
