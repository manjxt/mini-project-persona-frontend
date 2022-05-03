import React, { useState } from "react";
import "./chatbot.css";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      message: "Hi, Welcome to Persona!",
    },
  ]);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessages((prev) => [
      {
        message,
        from: "visitor",
      },
      ...prev,
    ]);
    setMessage("");
    console.log("making api call...");
    const response = await fetch(
      `http://127.0.0.1:5000/chat?message=${message}`
    );
    console.log("response", response);
    const data = await response.json();
    console.log("data", data);
    setTimeout(() => {
      setMessages((prev) => [
        {
          message: data.data,
          from: "bot",
        },
        ...prev,
      ]);
    }, 500);
  };

  return (
    <div class="chatbox">
      <h2>Chat</h2>
      <div className="chatbox__messages">
        {messages.map((item, index) =>
          item.from === "bot" ? (
            // <div className="outer_message_container">
            //   <img
            //     className="avatar"
            //     src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
            //     alt="image"
            //   ></img>
            <div className="messages__item messages__item--bot">
              {item.message}
            </div>
          ) : (
            // </div>
            <div className="messages__item messages__item--visitor">
              {item.message}
            </div>
          )
        )}
      </div>
      <div>
        <input
          name="message"
          placeholder="Type a message..."
          value={message}
          className="input"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          class="chatbox__send--footer send__button"
        >
          Send
        </button>
      </div>
    </div>
  );
}
