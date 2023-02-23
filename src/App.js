import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Platform from './pages/Platform';
import Pricing from './pages/Pricing';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/platform" element={<Platform/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
