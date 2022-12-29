
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/Home';
import './assets/qualification.css';
import './assets/header.css';
import './assets/footer.css';
import './assets/home.css';
import './assets/projects.css';
import Qualification from './components/quallification';
import Projects from './components/projects';
function App() {
  return (
    <>
    <Home/>
    <Qualification />
   <Projects />
   </>
  );
}

export default App;
