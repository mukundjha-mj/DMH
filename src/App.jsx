import { useState } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';

function App() {
  return (
    <>
      <div className=" min-h-screen  text-white flex flex-col">
        <Navbar />  
        <Hero />
      </div>
      
    </>
  );
}

export default App;
