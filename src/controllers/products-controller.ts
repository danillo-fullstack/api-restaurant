import { NextFunction, Request, Response } from "express";
import { knexInstance } from "../database/knex.js";

import { z } from "zod";

class ProductController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const { name } = request.query;

      const products = await knexInstance<productRepository>("products")
        .select()
        .whereLike("name", `%${name ?? ""}%`)
        .orderBy("name");

      return response.json(products);
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0),
      });

      const { name, price } = bodySchema.parse(request.body);

      await knexInstance<productRepository>("products").insert({ name, price });
      return response.status(201).json();
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const id = z.coerce
        .number()
        .int({ message: "id must be an integer" })
        .positive({ message: "id must be greater than zero" })
        .parse(request.params.id);

      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0),
      });

      const { name, price } = bodySchema.parse(request.body);

      await knexInstance<productRepository>("products")
        .update({ name, price, updated_at: knexInstance.fn.now() })
        .where({ id });

      response.json();
    } catch (error) {
      next(error);
    }
  }
}

export { ProductController };
