import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Counter from './pages/Counter.jsx';
import './App.css';
import Layout from './components/Layout.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <>
    <header>
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<h2>Page Not Found</h2>} />
            </Route>
          </Routes>
       
      </BrowserRouter>
    </header>
    </>
  );
}

export default App;
