import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Shopping from "./Pages/Shopping/Shopping";
import Card from "./Pages/Card";
// import Shopping from "./Pages/Shopping/Shopping";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Shopping" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
