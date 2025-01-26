const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyDrHprWaXrjrUxw0jfJ6OiqpQrXtfPq8Xo");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateEmail = async (req, res) => {
  const { prompt } = req.body;

  try {
    const result = await model.generateContent(prompt);
    res.json({ response: result.response.text });
  } catch (error) {
    console.error("Error generating email:", error);
    res.status(500).json({ response: "Error generating email." });
  }
};

module.exports = { generateEmail };
