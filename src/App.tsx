import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import GradientDivider from './components/ui/GradientDivider';

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <Hero />
        <GradientDivider />
        <About />
        <GradientDivider />
        <Experience />
        <GradientDivider />
        <Projects />
        <GradientDivider />
        <Certifications />
        <GradientDivider />
        <Volunteering />
        <GradientDivider />
        <Contact />
      </main>
    </div>
  );
}

export default App;