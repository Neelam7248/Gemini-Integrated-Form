const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Load the appropriate model
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Optional CORS headers (in dev)
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Route: Test API key
router.get("/api/test-api-key", (req, res) => {
  if (process.env.GEMINI_API_KEY) {
    res.status(200).send("Gemini API key is set and route is working.");
  } else {
    res.status(500).send("API key is missing.");
  }
});

// Route: Handle prompt and return Gemini response
router.post("/api/prompt", async (req, res) => {
  console.log("Request received:", req.body);

  if (!req.body || !req.body.prompt) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  try {
    const result = await model.generateContent(req.body.prompt);
    const response = await result.response;
    const text = response.text();
console.log("Gemini response:", text);
 // Debug
    res.status(200).json({ text });
  }catch (error) {
  console.error("Error in /api/prompt:", error);
  res.status(500).json({ error: error.message || "Internal Server Error" });
}

});

module.exports = router;
