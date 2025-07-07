import { Template } from "../models/index.js";

export const getAllTemplates = async (req, res, next) => {
  try {
    const templates = await Template.find();

    return res.status(200).json({
      success: true,
      data: templates,
    });
  } catch (e) {
    const error = new Error("Failed to fetch templates", {
      cause: e,
    });
    return next(error);
  }
};

export const getTemplateById = async (req, res) => {
  res.send("Hi");
};

export const deleteTemplateById = async (req, res) => {
  res.send("Hi");
};
