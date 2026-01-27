export default {
  client: "better-sqlite3",
  connection: {
    filename: "./src/database/database.db",
  },
  pool: {
    afterCreate: (connection: any, done: any) => {
      connection.prepare("PRAGMA foreign_keys = ON").run();
      done();
    },
  },
  useNullAsDefault: true,
  migrations: {
    extensions: "ts",
    directory: "./src/database/migrations",
  },
  seeds: {
    extensions: "ts",
    directory: "./src/database/seeds",
  },
};
