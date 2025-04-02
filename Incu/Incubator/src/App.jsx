import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const checkScroll = () => {
      const scrollAnimations = document.querySelectorAll('.scroll-animation');
      scrollAnimations.forEach((animation) => {
        const animationPosition = animation.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (animationPosition < screenPosition) {
          animation.classList.add('active');
        }
      });
    };

    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('load', checkScroll);
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;