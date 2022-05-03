import { useState } from "react";
import "./App.css";

function Home() {
  const [username, setUsername] = useState("");
  const [type, setType] = useState(null);

  const handleSubmit = async () => {
    console.log("making api call...");
    const response = await fetch(
      `http://127.0.0.1:5000/persona?username=${username}`
    );
    console.log("response", response);
    const data = await response.json();
    console.log("data", data);
    if (data.data) return setType(data.data);
  };

  return (
    <div className="App">
      {/* <input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>Get MBTI personality</button>
      {type && <h2>Your personality type is {type}</h2>} */}
      <header>
        <div class="main">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/kyp">Know your Personality</a>
            </li>
            <li>
              <a href="/about">AboutUs</a>
            </li>
            <li>
              <a href="#">ContactUs</a>
            </li>
          </ul>
        </div>

        <div class="title">
          <h1>PERSONA</h1>
        </div>
        <div className="button">
          <input
            name="username"
            className="btn2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter twitter username"
          />
          <button className="btn" onClick={handleSubmit}>
            Get MBTI personality
          </button>
          {type && <p>Your personality type is {type}</p>}
        </div>
      </header>
    </div>
  );
}

export default Home;
