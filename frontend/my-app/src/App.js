import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import History from "./pages/History";
import Historydetail from "./pages/Historydetail";
import Qr from "./pages/Qr";
import Scene1 from "./scene/Scene1";
import Scene2 from "./scene/Scene2";
import Scene3 from "./scene/Scene3";
import Scene4 from "./scene/Scene4";
import Scene5 from "./scene/Scene5";
import Scene6 from "./scene/Scene6";
import Scene7 from "./scene/Scene7";
import Scene8 from "./scene/Scene8";
import Scene9 from "./scene/Scene9";
import Scene10 from "./scene/Scene10";
import Scene11 from "./scene/Scene11";
import Scene12 from "./scene/Scene12";
import Scene13 from "./scene/Scene13";
import Scene14 from "./scene/Scene14";
import Scene15 from "./scene/Scene15";
import Scene16 from "./scene/Scene16";
import Scene17 from "./scene/Scene17";
import Scene18 from "./scene/Scene18";
import Scene19 from "./scene/Scene19";
import Resultpage from "./pages/ResultPage";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/history" element={<History />}></Route>
            <Route
              path="/history/:historyId"
              element={<Historydetail />}
            ></Route>
            <Route path="/Qr" element={<Qr/>}></Route>
            <Route path="/Scene1" element={<Scene1 />}></Route>
            <Route path="/Scene2" element={<Scene2 />}></Route>
            <Route path="/Scene3" element={<Scene3 />}></Route>
            <Route path="/Scene4" element={<Scene4 />}></Route>
            <Route path="/Scene5" element={<Scene5 />}></Route>
            <Route path="/Scene6" element={<Scene6 />}></Route>
            <Route path="/Scene7" element={<Scene7 />}></Route>
            <Route path="/Scene8" element={<Scene8 />}></Route>
            <Route path="/Scene9" element={<Scene9 />}></Route>
            <Route path="/Scene10" element={<Scene10 />}></Route>
            <Route path="/Scene11" element={<Scene11 />}></Route>
            <Route path="/Scene12" element={<Scene12 />}></Route>
            <Route path="/Scene13" element={<Scene13 />}></Route>
            <Route path="/Scene14" element={<Scene14 />}></Route>
            <Route path="/Scene15" element={<Scene15 />}></Route>
            <Route path="/Scene16" element={<Scene16 />}></Route>
            <Route path="/Scene17" element={<Scene17 />}></Route>
            <Route path="/Scene18" element={<Scene18 />}></Route>
            <Route path="/Scene19" element={<Scene19 />}></Route>
            <Route path="/Result" element={<Resultpage/>}></Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
