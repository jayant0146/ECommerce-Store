import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Prac1 from './components/prac1';
import Prac2 from './components/prac2';

const App = () => {
  const userId = "userId2"
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/cart' element={<Cart userId={userId}/>} />
          <Route path='/prac1' element={<Prac1 />} />
          <Route path='/prac2' element={<Prac2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App