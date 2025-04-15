import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Shopping from "./Pages/Shopping/Shopping";
import Card from "./Pages/Card/Card";
import Search from "./Pages/Search/Search";
import Layout from "./Container/Layout";
// import Shopping from "./Pages/Shopping/Shopping";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Login />} />
            <Route path="/Shopping" element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
