import './App.css';
import { Articles } from './components/Articles';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
