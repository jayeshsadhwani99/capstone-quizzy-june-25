import { Router } from "express";
import {
  deleteTemplateById,
  getAllTemplates,
  getTemplateById,
} from "../controllers/index.js";

export const templateRouter = Router();

templateRouter.get("/", getAllTemplates);
templateRouter.get("/:id", getTemplateById);
templateRouter.delete("/:id", deleteTemplateById);
