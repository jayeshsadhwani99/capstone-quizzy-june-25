import { Assesment } from "../models/index.js";

export const createAssessment = async (req, res, next) => {
  try {
    // TODO: Implement the logic to create an assesment

    return res.status(201).json({
      success: true,
    });
  } catch (e) {
    const error = new Error("Failed to create assement", {
      cause: e,
    });
    return next(error);
  }
};

export const getAllAssessments = async (req, res, next) => {
  try {
    const assessments = await Assesment.find();

    return res.status(200).json({
      success: true,
      data: assessments,
    });
  } catch (e) {
    const error = new Error("Failed to fetch assessments", {
      cause: e,
    });
    return next(error);
  }
};

export const getAssessmentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      const error = new Error("Assesment ID is required", {
        cause: new Error("Assesment ID is required"),
      });
      return next(error);
    }

    const assessment = await Assesment.findById(id);

    return res.status(200).json({
      success: true,
      data: assessment,
    });
  } catch (e) {
    const error = new Error("Failed to fetch assessment by ID", {
      cause: e,
    });
    return next(error);
  }
};

export const deleteAssessmentById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      const error = new Error("Assesement ID is required", {
        cause: new Error("Assesement ID is required"),
      });
      return next(error);
    }

    const assessment = await Assesment.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      data: assessment,
    });
  } catch (e) {
    const error = new Error(`Failed to delete assessment by ID: ${id}`, {
      cause: e,
    });
    return next(error);
  }
};
