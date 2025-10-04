import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = process.env["PORT"] || 3000;

app.get("/", (req: Request, res: Response) => {
  console.log(req);
  res.send("Hello World 🌍 from Express + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
