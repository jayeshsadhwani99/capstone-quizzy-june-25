import { Router } from "express";
import {
  createAssesment,
  deleteAssesmentById,
  getAllAssesments,
  getAssesmentById,
} from "../controllers/index.js";

export const assesmentsRouter = Router();

assesmentsRouter.post("/", createAssesment);
assesmentsRouter.get("/", getAllAssesments);
assesmentsRouter.get("/:id", getAssesmentById);
assesmentsRouter.delete("/:id", deleteAssesmentById);
