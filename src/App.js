import React from 'react'
import './App.css';
import About from './components/about/About';
import Clients from './components/clients/Clients';
import Features from './components/feature/Features';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Features/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;

