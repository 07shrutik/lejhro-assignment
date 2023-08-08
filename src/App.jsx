import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Attach scroll event listener
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <Blog />
      <hr />
      <footer>
        <Footer />
      </footer>
      <div className="companyRights">
        <p>© 2023 LEJHRO. All Rights Reserved.</p>
      </div>
      {showButton && (
        <button className="fixed-button" onClick={scrollToTop}>
          <KeyboardArrowUpIcon />
        </button>
      )}
    </>
  );
}

export default App;
