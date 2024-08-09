import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/signup";
import Login from "./pages/login";

import Home from "./pages/home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
