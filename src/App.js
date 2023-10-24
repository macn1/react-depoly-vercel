
import './App.css';
import Home from './Components/Home';
import Privacy from './Components/Privacy';
import Refund from './Components/Refund';
import Terms from './Components/Terms';
import Payment from './Components/Payment';
import Contact from  './Components/Contact'

import {
  BrowserRouter,
  
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>


      <Route exact path="/" element={<Home/>} />

      <Route exact path="/privacy" element={<Privacy/>} />
      <Route exact path="/refund" element={<Refund/>} />
      <Route exact path="/terms" element={<Terms/>} />
      <Route exact path="/payment" element={<Payment/>} />
      <Route exact path="/contact" element={<Contact/>} />
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
