// Ideally I would be generating these types based on the database schema, or just using an ORM.
export type Feedback = {
  id: number;
  name: string;
  email: string;
  feedbacktext: string;
  timestamp: string;
  sentiment: "happy" | "neutral" | "unhappy";
};
