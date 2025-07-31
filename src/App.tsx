import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
// import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="bg-background text-text-primary font-sans">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      {/* <Team /> */}
      <Contact />

      <Footer />
    </div>
  );
};

export default App;
