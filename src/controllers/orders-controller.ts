import { Request, Response, NextFunction } from "express";
import { knexInstance } from "@/database/knex.js";
import { AppError } from "@/utils/AppError.js";
import { z } from "zod";

class OrdersController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_session_id: z.coerce.number().int().positive(),
        product_id: z.coerce.number().int().positive(),
        quantity: z.coerce.number().int().positive(),
      });

      const { product_id, table_session_id, quantity } = bodySchema.parse(
        request.body,
      );

      const product = await knexInstance<productRepository>("products")
        .select()
        .where({ id: product_id })
        .first();

      if (!product) {
        throw new AppError("product not found.", 404);
      }

      const session = await knexInstance<TablesSessionsRepository>(
        "tables_sessions",
      )
        .where({ id: table_session_id })
        .first();

      if (!session) {
        throw new AppError("session table not found.", 404);
      }

      if (session.closed_at) {
        throw new AppError("this table is closed.", 409);
      }

      await knexInstance<OrderRepository>("orders").insert({
        table_session_id,
        product_id,
        quantity,
        price: product.price,
      });
      return response.status(201).json();
    } catch (error) {
      next(error);
    }
  }
}

export { OrdersController };
