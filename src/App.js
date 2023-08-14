

import React  from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalstyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Info from './components/Info';
 import { InfoDataTwo } from './data/InfoData';
import ContactUs from './components/ContactUs';
import { Routes, Route } from 'react-router';
import AboutUs from './components/AboutUs';
import HomePage from './components/Homes';
import Footer from './components/Footer';


function App() {
 
  return (
    <>
      <GlobalStyle />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route
          path="/home"
          element={<HomePage/>} 
        />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <>
      <Hero slides={SliderData} />
      <Info {...InfoDataTwo} />
      <Footer/>
    </>
  );
}
export default App;

