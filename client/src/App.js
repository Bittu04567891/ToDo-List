import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cards from "./components/cards/Cards";
import Navbar from "./components/navbar/Navbar";
import Create from "./components/Create";
import Starred from "./pages/starred/Starred";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cards" element={<Navbar />} />
          <Route path="/create" element={<Create />} />
          <Route path="/notes" element={<Cards />} />
          <Route path="/star" element={<Starred />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
