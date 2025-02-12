import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Body from "../component/Body/Body";
import Footer from "../component/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Home = () => {
  const [toggle,setToggle] = useState(true)
  return (
    <div style={{ backgroundColor : toggle?"white" :"black", color:toggle?"black":"smokywhite"  }}>
      <Router>
        <Navbar setToggle={setToggle} toggle={toggle}/>
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Home;

// Image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2904780">Gerd Altmann</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2904780">Pixabay</a>
