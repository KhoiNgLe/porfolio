import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Skills/>
      <Work></Work>
      <Contact/>
    </div>
  );
}

export default App;
