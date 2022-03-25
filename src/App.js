import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/Button';
import Input from './components/atoms/Input';
import BasicLayout from './components/templates/BasicLayout';

import { Routes, Route } from "react-router-dom";
import { Character } from "./components/pages/Character";
import { Principal } from "./components/pages/Principal";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/characters/:id" element={<Character />} />
      </Routes>
    
  );
}

export default App;
