import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import Details from './components/Details';
import Edit from './components/Edit';

import './styles/App.css';

function App() {
  const [products, setProducts] = useState([]);


  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<Main products={products} setProducts={setProducts} />} path="/" default />
              <Route element={<Details products={products} setProducts={setProducts} />} path="/product/:id"  />
              <Route element={<Edit />} path="/product/edit/:id"  />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
