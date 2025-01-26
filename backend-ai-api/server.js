require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Gemini API client
const genAI = new GoogleGenerativeAI("AIzaSyDrHprWaXrjrUxw0jfJ6OiqpQrXtfPq8Xo"); //replace with .env file normally
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// API Endpoint
app.post("/api/generate-email", async (req, res) => {
    
  console.log("Request received at /api/generate-email:", req.body);

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Failed to generate email." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
