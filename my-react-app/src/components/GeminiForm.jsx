import React, { useState } from "react";

const GeminiForm = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      console.log("Frontend received:", data);
      if (!res.ok) {
  setResponse(data.error || "Server returned an error.");
  return;
}

setResponse(data.text || "No response received.");

     setResponse(data.text || data.message);

    } catch (err) {
      console.error("Frontend error:", err);
      setResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">Enter your question:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type here..."
          required
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
      {response && (
        <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
          <strong>Gemini says:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiForm;
