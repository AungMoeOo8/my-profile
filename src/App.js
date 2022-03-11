import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Skills from "./components/skills";
import Framework from "./components/framework";


function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Skills />
      <Framework />
    </div>
  );
}

export default App;
