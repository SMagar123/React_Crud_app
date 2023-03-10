import "./App.css";
import AddUsers from "./components/AddUsers";
import Logo from "./components/Home";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUsers from "./components/EditUsers";
import Footer from "./components/Footer";
import About from "./components/About";
import { createContext } from "react";
import aimage from "./images/aboutimage.jpg";
const AboutImage = createContext();
function App() {
  const aboutPageimageLink = aimage;
  return (
    <AboutImage.Provider value={aboutPageimageLink}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addusers" element={<AddUsers />} />
          <Route path="/edit/:id" element={<EditUsers />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </AboutImage.Provider>
  );
}

export default App;
export { AboutImage };
