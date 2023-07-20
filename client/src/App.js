import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Get from "./Get";
import Post from "./Post";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get" element={<Get />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
