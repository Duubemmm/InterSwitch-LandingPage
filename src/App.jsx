import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Objectives from './components/Objectives';
import Stats from './components/Stats';
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
      <Stats />
      <Objectives/>
      <IdeaSection />
      <SecuritySection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;