import { Router } from "express";
import {
  createAssessment,
  deleteAssessmentById,
  getAllAssessments,
  getAssessmentById,
} from "../controllers/index.js";

export const assessmentsRouter = Router();

assessmentsRouter.post("/", createAssessment);
assessmentsRouter.get("/", getAllAssessments);
assessmentsRouter.get("/:id", getAssessmentById);
assessmentsRouter.delete("/:id", deleteAssessmentById);
