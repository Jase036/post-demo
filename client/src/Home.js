import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>
        <Link to="/get">Fetch GET</Link>
      </h2>
      <h2>
        <Link to="/post">Fetch POST</Link>
      </h2>
      <p>Demo for Fetch GET & POST.</p>
      <p>Click on one of the links to get started.</p>
    </div>
  );
};

export default Home;
