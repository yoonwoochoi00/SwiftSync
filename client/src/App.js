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

// Security components
import useToken from "./components/private/useToken.js";

function App() {
  const { token, removeToken, setToken } = useToken();

  return (
    <div>
      {/* Global design */}
      <Helmet>
        <title>SwiftSync</title>
        <style>{'body { background-color: #f5f5f5; }'}</style>
      </Helmet>
      <Routes>
        {/* Public paths */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn setToken={setToken}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
        {/* Private paths NEED TO UPDATE ACCESS */}
        <Route path="/dashboard" element={<Dashboard token={token} removeToken={removeToken}/>} />
      </Routes>
    </div>
  );
}

export default App;
