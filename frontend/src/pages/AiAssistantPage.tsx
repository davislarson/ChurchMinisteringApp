import React, { useState } from "react";
import "../css/HomePage.css";
// import Footer from "../elements/Footer";
import Navbar from "../elements/Navbar";
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
  const [isTyping, setIsTyping] = useState(false);
  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true); // 👈 show typing animation

    const assistantText = await generateResponse(input);
    const assistantMessage: Message = {
      sender: "assistant",
      text: assistantText,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setInput("");
    setIsTyping(false); // 👈 hide typing animation
  };

  // Function to generate a response from the assistant
  const generateResponse = async (input: string): Promise<string> => {
    try {
      const res = await fetch("https://localhost:4000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      return data.reply;
    } catch (error) {
      console.error("Error calling ASP.NET backend:", error);
      return "Sorry, I couldn't generate a response.";
    }
  };

  return (
    <>
      <div className="d-flex flex-column vh-100 bg-light">
        {/* Header */}
        <Navbar headerTitle="Minister With AI" />

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
        {isTyping && (
          <div className="d-flex mb-3 justify-content-start">
            <div
              className="event-card bg-white border text-muted"
              style={{ maxWidth: "75%" }}
            >
              <p className="mb-0 fst-italic typing-indicator">
                Assistant is typing
                <span className="dots" />
              </p>
            </div>
          </div>
        )}

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
          {/* <Footer /> */}
        </footer>
      </div>
    </>
  );
};

export default AiAssistantPage;
