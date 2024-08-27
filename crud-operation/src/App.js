// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Create' element={<Create/>}></Route>
  <Route path='/update/:id' element={<Update/>}></Route>
  <Route path='/read/:id' element={<Read/>}></Route>
</Routes>
</BrowserRouter>


        </div>
  );
}

export default App;
