import { config } from "dotenv";
import express, { json } from "express";
import { connect } from "mongoose";

config();

const app = express();

app.use(json());

// MongoDB connection
connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Quizzy API is up." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port http://localhost:${PORT}`),
);
