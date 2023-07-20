import { useState } from "react";
import { Link } from "react-router-dom";

const Post = () => {
  const [response, setResponse] = useState("");
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("/home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ userInput }),
    })
      .then((res) => res.json())
      .then((parsed) => setResponse(parsed.message));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="test"
          placeholder="Type Something Here..."
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <h1>The server responded with:</h1>
      <h2>{response ? response : "Nothing yet..."}</h2>

      <Link style={{ display: "block" }} to="/">
        Back to Home
      </Link>
    </>
  );
};

export default Post;
