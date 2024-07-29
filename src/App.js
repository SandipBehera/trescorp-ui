import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Contact from './pages/contact';
import Products from './pages/products';
import Service from './pages/service';
import './pages/home.css';
import Clients from './pages/clients';
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
          <Route path="/counter-party" element={<Clients/>} />
        </Routes>
     
    </Router>
  );
}

export default App;
