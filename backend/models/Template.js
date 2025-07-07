import { Schema } from "mongoose";
import { QuestionTemplateSchema } from ".";

const TemplateSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    gradeLevel: {
      type: String,
    },
    questionsTemplates: {
      type: [QuestionTemplateSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Template = model("Template", TemplateSchema);
