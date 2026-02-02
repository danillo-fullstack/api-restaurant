import { Request, Response, NextFunction } from "express";
import { knexInstance } from "@/database/knex.js";
import { z } from "zod";
import { AppError } from "@/utils/AppError.js";

class TablesSessionsController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_id: z.number(),
      });

      const { table_id } = bodySchema.parse(request.body);

      const session = await knexInstance<TablesSessionsRepository>(
        "tables_sessions",
      )
        .where({ table_id })
        .orderBy("opened_at", "desc")
        .first();

      if (session && !session?.closed_at) {
        throw new AppError("This table is already open.");
      }

      await knexInstance<TablesSessionsRepository>("tables_sessions").insert({
        table_id,
        opened_at: knexInstance.fn.now(),
      });

      return response.status(201).json();
    } catch (error) {
      next(error);
    }
  }
}

export { TablesSessionsController };
