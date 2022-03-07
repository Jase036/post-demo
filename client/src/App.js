import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Get from "./Get";
import Post from "./Post";

const App = () => {

    return (
        <Router>

            <div>
                <h2><Link to="/">Fetch GET</Link></h2>
                <h2><Link to="/post">Fetch POST</Link></h2>
            </div>

            <Routes>
                
                <Route path="/" element={<Get />} />

                <Route path="/post" element={<Post />} />

            </Routes>
        </Router>
    )
}

export default App;
