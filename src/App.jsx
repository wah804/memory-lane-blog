import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <nav className="navbar">
          <div className="nav-content">
            <Link to="/" className="nav-brand">Memory Lane.</Link>
            <div className="nav-links">
              <a href="https://github.com/brandonbrown" target="_blank" rel="noopener noreferrer">About</a>
            </div>
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2026 Memory Lane. Built with Vite, React & Markdown.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
