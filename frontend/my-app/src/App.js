import logo from './logo.svg';
import './App.css';
import React, {Component , useRef , useState , props} from 'react'
import {BrowserRouter, Routes,Route , useNavigate,useLocation} from 'react-router-dom'
import Main from './pages/Main';
import Home from './pages/Home';
import History from './pages/History';
import Historydetail from './pages/Historydetail';
import Product from './pages/Product';
import Scene1 from './pages/Scene1';
import Scene2 from './pages/Scene2';
import Scene3 from './pages/Scene3';
import Scene4 from './pages/Scene4';
import Scene5 from './pages/Scene5';
import Scene6 from './pages/Scene6';
import Scene7 from './pages/Scene7';
import Scene8 from './pages/Scene8';
import Scene9 from './pages/Scene9';
import Scene10 from './pages/Scene10';
import Scene11 from './pages/Scene11';
import Scene12 from './pages/Scene12';
import Scene13 from './pages/Scene13';
import Scene14 from './pages/Scene14';
import Scene15 from './pages/Scene15';
import Scene16 from './pages/Scene16';
import { AnimatePresence } from "framer-motion";

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <AnimatePresence>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/history" element={<History/>}></Route>
          <Route path="/history/:historyId" element={<Historydetail/>}></Route>
					<Route path="/product/" element={<Product />}></Route>
          <Route path="/Scene1" element={<Scene1/>}></Route>
          <Route path="/Scene2" element={<Scene2/>}></Route>
          <Route path="/Scene3" element={<Scene3/>}></Route>
          <Route path="/Scene4" element={<Scene4/>}></Route>
          <Route path="/Scene5" element={<Scene5/>}></Route>
          <Route path="/Scene6" element={<Scene6/>}></Route>
          <Route path="/Scene7" element={<Scene7/>}></Route>
          <Route path="/Scene8" element={<Scene8/>}></Route>
          <Route path="/Scene9" element={<Scene9/>}></Route>
          <Route path="/Scene10" element={<Scene10/>}></Route>
          <Route path="/Scene11" element={<Scene11/>}></Route>
          <Route path="/Scene12" element={<Scene12/>}></Route>
          <Route path="/Scene13" element={<Scene13/>}></Route>
          <Route path="/Scene14" element={<Scene14/>}></Route>
          <Route path="/Scene15" element={<Scene15/>}></Route>
          <Route path="/Scene16" element={<Scene16/>}></Route>
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
