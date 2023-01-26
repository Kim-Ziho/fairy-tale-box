import logo from './logo.svg';
import './App.css';
import React, {Component , useRef} from 'react'
import {BrowserRouter, Routes,Route , useNavigate,useLocation} from 'react-router-dom'
import Header from './pages/Header';
import Main from './pages/Main';
import Product from './pages/Product';
import Scene1 from './pages/scene1';
import Scene2 from './pages/scene2';
import Scene3 from './pages/scene3';
import Scene4 from './pages/scene4';
import Scene5 from './pages/scene5';
import Scene6 from './pages/scene6';
import Scene7 from './pages/scene7';
import Scene8 from './pages/scene8';
import Scene9 from './pages/scene9';
import Scene10 from './pages/scene10';
import Scene11 from './pages/scene11';
import Scene12 from './pages/scene12';
import Scene13 from './pages/scene13';
import Scene14 from './pages/scene14';
import Scene15 from './pages/scene15';
import Scene16 from './pages/scene16';
import Scene17 from './pages/scene17';
import Scene18 from './pages/scene18';
import Scene19 from './pages/scene19';
import Scene20 from './pages/scene20';
import Scene21 from './pages/scene21';
import { AnimatePresence } from "framer-motion";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AnimatePresence>
        <Routes>
          <Route path="/" element={<Main />}></Route>
					<Route path="/product/" element={<Product />}></Route>
          <Route path="/scene1" element={<Scene1/>}></Route>
          <Route path="/scene2" element={<Scene2/>}></Route>
          <Route path="/scene3" element={<Scene3/>}></Route>
          <Route path="/scene4" element={<Scene4/>}></Route>
          <Route path="/scene5" element={<Scene5/>}></Route>
          <Route path="/scene6" element={<Scene6/>}></Route>
          <Route path="/scene7" element={<Scene7/>}></Route>
          <Route path="/scene8" element={<Scene8/>}></Route>
          <Route path="/scene9" element={<Scene9/>}></Route>
          <Route path="/scene10" element={<Scene10/>}></Route>
          <Route path="/scene11" element={<Scene11/>}></Route>
          <Route path="/scene12" element={<Scene12/>}></Route>
          <Route path="/scene13" element={<Scene13/>}></Route>
          <Route path="/scene14" element={<Scene14/>}></Route>
          <Route path="/scene15" element={<Scene15/>}></Route>
          <Route path="/scene16" element={<Scene16/>}></Route>
          <Route path="/scene17" element={<Scene17/>}></Route>
          <Route path="/scene18" element={<Scene18/>}></Route>
          <Route path="/scene19" element={<Scene19/>}></Route>
          <Route path="/scene20" element={<Scene20/>}></Route>
          <Route path="/scene21" element={<Scene21/>}></Route>
          
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
