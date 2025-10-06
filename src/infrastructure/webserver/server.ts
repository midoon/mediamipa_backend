import express, { Router } from "express";
import type { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";

export const createServer = (routes: Router[]): Express => {
  const app = express();
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors({ credentials: true, origin: true }));

  routes.forEach((route) => app.use(route));

  return app;
};
