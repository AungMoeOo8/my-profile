import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Skills from "./components/skills";
import Framework from "./components/framework";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "./components/footer";
import { motion } from "framer-motion";

function App() {
  // useEffect(() => {
  //   document.title = `Aung Moe Oo's Profile`
  // }, [])
  return (
    <div className="container">
      <Helmet>
        <title>Aung Moe Oo's Profile</title>
      </Helmet>
      <Navbar />
      <Main />
      <Skills />
      <Framework />
      <Footer />

      <div
        className="fancy"
        style={{
          display: "flex",
          position: "fixed",
          top: "10%",
          left: "80%",
          right: "40%",
          width: "100%",
          maxWidth: "70px",
          height: "auto",
          // filter: 'blur(1px)',
          zIndex: "-1",
          transform: 'rotate(30deg)'
        }}
      >
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
      </div>

      <div
        className="fancy"
        style={{
          display: "flex",
          position: "fixed",
          top: "50%",
          left: "20%",
          right: "40%",
          width: "100%",
          maxWidth: "70px",
          height: "auto",
          // filter: 'blur(1px)',
          zIndex: "-1",
        }}
      >
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg" />
      </div>

      <div
        className="fancy"
        style={{
          display: "flex",
          position: "fixed",
          top: "80%",
          left: "75%",
          right: "40%",
          width: "100%",
          maxWidth: "70px",
          height: "auto",
          // filter: 'blur(1px)',
          zIndex: "-1",
        }}
      >
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
      </div>
    </div>
  );
}

export default App;
