import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = process.env["PORT"] || 3000;

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World 🌍 from Express + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
