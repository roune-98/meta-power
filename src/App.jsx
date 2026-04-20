import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Equipment from './components/Equipment';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Rules from './components/Rules';
import Horaires from './components/Horaires';
import Services from './components/Services';
import Sparring from './components/Sparring';
import Coaches from './components/Coaches';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Equipment />
        <Gallery />
        <Pricing />
        <Rules />
        <Horaires />
        <Services />
        <Sparring />
        <Coaches />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
