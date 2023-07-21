import "../Style/MainContent.css";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

export default function MainContent() {
  return (
    <div className="main-content">
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
