import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
