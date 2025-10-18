🌟 Gemini Integrated Form

A simple web application that integrates Google Gemini AI with a text-based form.
Users can enter a prompt and instantly receive a Gemini AI response.
Built with Node.js, Express, and React for seamless interaction between frontend and backend.

🚀 Features

🔹 Search or submit text prompts using Gemini AI

🔹 Real-time AI responses displayed on the page

🔹 Simple and clean UI

🔹 Node.js backend with Express

🔹 API integration using Google Gemini
Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Neelam7248/Gemini-Integrated-Form.git
cd GeminiIntegratedForm
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create .env file in the root folder
bash
Copy code
GEMINI_API_KEY=your_api_key_here
PORT=5000
4️⃣ Run the backend
bash
Copy code
npm start
5️⃣ Run the frontend (if using React)
bash
Copy code
cd client
npm start
🧠 Usage
Type your prompt (e.g. “Write a short poem about nature”)

Click Submit

The Gemini API will process your text and return a meaningful response.

📁 Project Structure
bash
Copy code
GeminiIntegratedForm/
│
├── server.js              # Express backend
├── routes/aiRoutes.js     # Handles Gemini API requests
├── client/                # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   └── components/
│   └── package.json
└── .env.example           # Environment variables
📜 License
This project is open-source and available under the MIT License.

✨ Author
Neelam Kausar
📧 kausarneelam@gmail.com
💻 GitHub Profile

