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

  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const sessions = await knexInstance<TablesSessionsRepository>(
        "tables_sessions",
      )
        .select()
        .orderBy("closed_at");

      return response.json(sessions);
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const id = z.coerce
      .number()
      .int({ message: "id must be an integer" })
      .positive({ message: "id must be greater than zero" })
      .parse(request.params.id);

    const session = await knexInstance<TablesSessionsRepository>(
      "tables_sessions",
    )
      .where({ id })
      .first();

    if (!session) {
      throw new AppError("session table not found.");
    }

    if (session.closed_at) {
      throw new AppError("this sessions table is already closed.");
    }

    await knexInstance<TablesSessionsRepository>("tables_sessions")
      .update({ closed_at: knexInstance.fn.now() })
      .where({ id });

    return response.json();
  }
}

export { TablesSessionsController };
