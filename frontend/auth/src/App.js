import Login from './components/login/Login';
import Join from './components/join/join';
import './App.css'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} path='/login' />
        <Route element={<Join />} path='/join' />
      </Routes>
    </div>
  );
}

export default App;
