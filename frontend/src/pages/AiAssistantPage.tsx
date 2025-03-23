import React, { useState } from "react";
import "../css/HomePage.css";
import Footer from "../elements/Footer";
// Define the structure of a message
interface Message {
  sender: "user" | "assistant";
  text: string;
}

const AiAssistantPage: React.FC = () => {
  // State to keep track of messages
  const [messages, setMessages] = useState<Message[]>([]);
  // State to keep track of the input field value
  const [input, setInput] = useState("");

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (!input.trim()) return; // Do nothing if the input is empty

    // Create new messages array with the user's message and the assistant's response
    const newMessages: Message[] = [
      ...messages,
      { sender: "user", text: input },
      { sender: "assistant", text: generateResponse(input) },
    ];
    setMessages(newMessages); // Update the messages state
    setInput(""); // Clear the input field
  };

  // Function to generate a response from the assistant
  const generateResponse = (input: string): string => {
    return `Here's a suggestion for ministering based on: "${input}" 🙏`;
  };

  return (
    <>
      <div className="d-flex flex-column vh-100 bg-light">
        {/* Header */}
        <header className="bg-white border-bottom shadow-sm p-3 text-center">
          <h1 className="h5 mb-0 fw-semibold">AI Ministering Assistant</h1>
        </header>

        {/* Chat Messages */}
        <main className="flex-grow-1 overflow-auto px-3 py-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`d-flex mb-3 ${
                msg.sender === "user"
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={`event-card ${
                  msg.sender === "user"
                    ? "bg- text-white"
                    : "bg-white text-black border"
                }`}
                style={{ maxWidth: "75%" }}
              >
                <p className="mb-0" style={{ whiteSpace: "pre-wrap" }}>
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </main>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="border-top bg-white p-3">
          <div className="input-group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control rounded-start-pill"
              placeholder="Ask how to minister..."
            />
            <button
              type="submit"
              className="btn btn-secondary rounded-end-pill"
            >
              Send
            </button>
          </div>
        </form>
        <br />
        <br />
        <footer className="bg-white border-top text-center py-2">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default AiAssistantPage;
