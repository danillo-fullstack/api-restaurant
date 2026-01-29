import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("products").del();

  // Inserts seed entries
  await knex("products").insert([
    { name: "Hambúrguer Artesanal", price: 28.9 },
    { name: "Cheeseburger Clássico", price: 24.5 },
    { name: "Pizza Margherita", price: 39.9 },
    { name: "Pizza Calabresa", price: 42.0 },
    { name: "Lasanha à Bolonhesa", price: 34.9 },
    { name: "Espaguete ao Alho e Óleo", price: 26.5 },
    { name: "Risoto de Cogumelos", price: 36.9 },
    { name: "Filé de Frango Grelhado", price: 29.9 },
    { name: "Salada Caesar", price: 22.9 },
    { name: "Suco Natural de Laranja", price: 9.5 },
  ]);
}
