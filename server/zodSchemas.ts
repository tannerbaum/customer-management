import * as zod from "zod";

export const feedbackFormSchema = zod.object({
  email: zod.string().email().min(1, "Email is required"),
  name: zod.string().min(1, "Name is required"),
  feedback: zod.string().min(1, "Feedback is required"),
  sentiment: zod.enum(["happy", "neutral", "unhappy"]),
});
