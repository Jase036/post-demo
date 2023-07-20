import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Get = () => {
  const [response, setResponse] = useState("");

  const handleClick = () => {
    fetch("/home")
      .then((res) => res.json())
      .then((parsed) => setResponse(parsed.message));
  };

  return (
    <>
      <button onClick={handleClick}>Click me to fetch GET!</button>
      <h1>The server responded with:</h1>
      <h2>{response ? response : "Nothing yet"}</h2>

      <Link style={{ display: "block" }} to="/">
        Back to Home
      </Link>
      <Link to="/post">Checkout the POST component</Link>
    </>
  );
};

export default Get;
