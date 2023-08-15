/* eslint-disable react/prop-types */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Price from "./components/Price";
import Checkout from "./components/Checkout";
import ScrollToTop from "./scrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
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

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
