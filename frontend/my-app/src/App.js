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
import Scene1test from "./scene_test/Scene1_test";
import Scene2test from "./scene_test/Scene2_test";
import Scene6test from "./scene_test/Scene6_test";
import Scene7test from "./scene_test/Scene7_test";
import Scene8test from "./scene_test/Scene8_test";
import Scene9test from "./scene_test/Scene9_test";
import Scene10test from "./scene_test/Scene10_test";
import Scene11test from "./scene_test/Scene11_test";
import Scene12test from "./scene_test/Scene12_test";
import Scene14test from "./scene_test/Scene14_test";
import Scene15test from "./scene_test/Scene15_test";
import Scene17test from "./scene_test/Scene17_test";
import Scene18test from "./scene_test/Scene18_test";
import Scene19test from "./scene_test/Scene19_test";
import Resultpage from "./pages/ResultPage";
import { AnimatePresence } from "framer-motion";

function App() {
  window.source = new EventSource("http://localhost:8000/stream-pose");
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
            <Route path="/Qr" element={<Qr />}></Route>
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
            <Route path="/Scene1_test" element={<Scene1test />}></Route>
            <Route path="/Scene2_test" element={<Scene2test />}></Route>
            <Route path="/Scene6_test" element={<Scene6test />}></Route>
            <Route path="/Scene7_test" element={<Scene7test />}></Route>
            <Route path="/Scene8_test" element={<Scene8test />}></Route>
            <Route path="/Scene9_test" element={<Scene9test />}></Route>
            <Route path="/Scene10_test" element={<Scene10test />}></Route>
            <Route path="/Scene11_test" element={<Scene11test />}></Route>
            <Route path="/Scene12_test" element={<Scene12test />}></Route>
            <Route path="/Scene14_test" element={<Scene14test />}></Route>
            <Route path="/Scene15_test" element={<Scene15test />}></Route>
            <Route path="/Scene17_test" element={<Scene17test />}></Route>
            <Route path="/Scene18_test" element={<Scene18test />}></Route>
            <Route path="/Scene19_test" element={<Scene19test />}></Route>
            <Route path="/Result" element={<Resultpage />}></Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
