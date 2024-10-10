import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp/SignUp";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { ScreenSizeProvider } from "./context/ScreenSizeContext/ScreenSizeProvider";

import "./App.css";

function App() {
  return (
    <main>
      <ScreenSizeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ScreenSizeProvider>
    </main>
  );
}

export default App;
