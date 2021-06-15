import './App.css';
import './normalize.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Proyects from './components/Proyects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {


  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
