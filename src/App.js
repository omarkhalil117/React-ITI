import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/About-Us/AboutUs';
import Skills from './components/Skills/Skills';
import Portofolio from './components/Portofolio/Portofolio';
function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <AboutUs/>
      <Skills/>
      <Portofolio/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
