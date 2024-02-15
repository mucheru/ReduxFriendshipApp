import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx'

import HomeConnect, { ConnectAcceptList, ConnectRejectList, ConnectBlockList } from './Container/HomeConnect.jsx'

import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={<HomeConnect />} />
          <Route path="/accept" element={<ConnectAcceptList />} />
          <Route path="/reject" element={<ConnectRejectList />} />
          <Route path="/block" element={<ConnectBlockList />} />
    </Routes>

    
    </>
  );
}

export default App;
