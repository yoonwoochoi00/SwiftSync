import { Routes, Route } from "react-router-dom";

// Public pages
import Home from "./pages/public/home.js";
import SignIn from "./pages/public/signin.js";
import SignUp from "./pages/public/signup.js";

// Private pages
import PageNotFound from "./pages/public/pageNotFound.js";

// Design related imports
import { Helmet } from "react-helmet";
import Dashboard from "./pages/private/dashboard.js";

function App() {
  return (
    <div>
      {/* Global design */}
      <Helmet>
        <title>SwiftSync</title>
        <style>{'body { background-color: #D8D8D8; }'}</style>
      </Helmet>
      <Routes>
        {/* Public paths */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
        {/* Private paths NEED TO UPDATE ACCESS */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
