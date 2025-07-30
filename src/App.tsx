import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
