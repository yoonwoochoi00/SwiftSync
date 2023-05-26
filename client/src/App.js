import { Routes, Route } from "react-router-dom";

// Component related imports
import Home from "./pages/home.js";
import LogIn from "./pages/login.js";
import PageNotFound from "./pages/pageNotFound.js";

// Design related imports
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>SwiftSync</title>
        <style>{'body { background-color: #D8D8D8; }'}</style>
      </Helmet>
      <Routes>
        {/* Public paths */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
