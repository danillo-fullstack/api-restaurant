import { ProductController } from "@/controllers/products-controller.js";
import { Router } from "express";

const productsRoutes = Router();
const productsController = new ProductController();

productsRoutes.get("/", productsController.index);
productsRoutes.post("/", productsController.create);
productsRoutes.get("/products", productsController.list);

export { productsRoutes };
