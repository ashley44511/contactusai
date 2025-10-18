import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize GoogleGenAI client
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// API Endpoint
app.post("/api/generate-email", async (req, res) => {
  console.log("Request received at /api/generate-email:", req.body);

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    // Generate content using the new SDK method
    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [prompt],
    });
    console.log(result.candidates[0].content.parts[0].text);
    res.json({ response: result.candidates[0].content.parts[0].text });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Failed to generate email." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
