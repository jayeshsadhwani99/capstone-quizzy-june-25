import { Template } from "../models/index.js";

export const createAssesmentQuestions = async (assessment) => {
  let questions = [];
  const { template: templateObjectId } = assessment;
  const templateId = templateObjectId.toString();
  if (!templateId) return;

  const template = await Template.findById(templateId);
  if (!template) return;

  const prompt = ```
  This is where we we will pass the prompt
  ```;

  // TODO: Call AI to create questions
  return questions;
};
