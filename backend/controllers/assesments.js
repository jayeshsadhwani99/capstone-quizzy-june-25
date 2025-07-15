import { Assesment } from "../models/index.js";

export const createAssesment = async (req, res, next) => {
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

export const getAllAssesments = async (req, res, next) => {
  try {
    const assesments = await Assesment.find();

    return res.status(200).json({
      success: true,
      data: assesments,
    });
  } catch (e) {
    const error = new Error("Failed to fetch assesments", {
      cause: e,
    });
    return next(error);
  }
};

export const getAssesmentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      const error = new Error("Assesment ID is required", {
        cause: new Error("Assesment ID is required"),
      });
      return next(error);
    }

    const assesment = await Assesment.findById(id);

    return res.status(200).json({
      success: true,
      data: assesment,
    });
  } catch (e) {
    const error = new Error("Failed to fetch assesment by ID", {
      cause: e,
    });
    return next(error);
  }
};

export const deleteAssesmentById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      const error = new Error("Assesement ID is required", {
        cause: new Error("Assesement ID is required"),
      });
      return next(error);
    }

    const assesment = await Assesment.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      data: assesment,
    });
  } catch (e) {
    const error = new Error(`Failed to delete assesment by ID: ${id}`, {
      cause: e,
    });
    return next(error);
  }
};
