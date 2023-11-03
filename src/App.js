import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App" id="home">
      <div className='header'>
        <Header />
      </div>
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      <div>
        
      </div>
    </div>
  );
}
export default App;
