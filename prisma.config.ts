// prisma.config.ts
import { defineConfig } from "@prisma/config";
import path from "node:path";

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("db", "migrations"),
    seed: "tsx src/infrastructure/database/seeder.ts",
  },
});
