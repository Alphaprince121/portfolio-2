import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {

  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className='bg-gray-900 dark:bg-white text-white dark:text-gray-900'>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </main>
    
    </div>
  );
}

export default App;
