import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => {
  const userId = "userId2"
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home userId={userId}/>} />
          <Route path='/cart' element={<Cart userId={userId}/>} />
          <Route path='/checkout' element={<Checkout userId={userId}/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App