import React from 'react';
import Timeline from './components/Timeline';
import Navigation from './Components/Navigation';
import HeroSection from './Components/HeroSection';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <h3 className="text-left mx-5">Timeline</h3>
      <Timeline />
    </div>
  );
}

export default App;
