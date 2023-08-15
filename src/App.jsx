import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Price from "./components/Price";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlight />
      <CallToAction />
      <Price />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
