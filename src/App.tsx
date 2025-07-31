import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="bg-background text-text-primary font-sans">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="process"><Process /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="team"><Team /></div>
      <div id="contact"><Contact /></div>

      <Footer />
    </div>
  );
};

export default App;
