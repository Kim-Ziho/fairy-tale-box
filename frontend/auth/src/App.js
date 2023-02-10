import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Logined from "./Logined";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/logined" element={<Logined />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
