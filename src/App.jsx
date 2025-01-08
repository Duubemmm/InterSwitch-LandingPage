import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';
import IdeaSection from './components/IdeaSection';
import Contact from './components/Contact';
import SecuritySection from './components/SecuritySection';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Partners />
      <Solutions />
      <Stats />
      <IdeaSection />
      <Contact/>
      <SecuritySection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;