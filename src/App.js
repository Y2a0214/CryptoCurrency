import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import SingleCurrency from './pages/SingleCurrency';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:id' element={<SingleCurrency/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
