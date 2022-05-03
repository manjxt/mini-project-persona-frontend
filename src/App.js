import { useState } from "react";
import "./App.css";

function App() {
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
      <input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>Get MBTI personality</button>
      {type && <h2>Your personality type is {type}</h2>}
    </div>
  );
}

export default App;
