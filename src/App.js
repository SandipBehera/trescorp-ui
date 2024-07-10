import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Contact from './pages/contact';
import Products from './pages/products';
import Service from './pages/service';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<HomePage/>} />
           <Route path="/about-us" element={<About/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/our-service" element={<Service/>} />
        </Routes>
     
    </Router>
  );
}

export default App;
