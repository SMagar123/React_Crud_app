import "./App.css";
import AddUsers from "./components/AddUsers";
import Logo from "./components/Home";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUsers from "./components/EditUsers";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addusers" element={<AddUsers />} />
        <Route path="/edit/:id" element={<EditUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
