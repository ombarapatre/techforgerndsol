import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Service';
import WhyTechForge from './components/WhyTechForge';
import Customers from './components/Customer';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyTechForge />
        <Customers />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
