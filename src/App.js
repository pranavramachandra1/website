import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Navbar } from './components/navbar';
import Home from "./components/homepage"
import Blog from "./components/blog"
import Contact from "./components/contact"
import Projects from "./components/projects"
import Resume from "./components/resume"
import SquatBuddy from './components/project_files/squat_buddy';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/squat_buddy" element={<SquatBuddy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={
          <div>
            <h1>404 Not Found</h1>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
