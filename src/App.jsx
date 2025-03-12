import Navbar from "./components/navbar/Navbar.jsx";
import Intro from "./components/intro/Intro.jsx";
import Skills from "./components/skills/Skills.jsx";
import Works from "./components/Works/Works.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Learnings from "./components/Learning/Learnings.jsx";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Skills/>
      <Works/>
      <Learnings/>
      <Contact/>
    </div>
      
  )
}

export default App;
