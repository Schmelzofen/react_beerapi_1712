import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Startseite from "./components/Startseite"
import './App.scss';
import React from 'react';
import { BierUebersicht } from "./components/BierUebersicht"
import BierZufall from "./components/BierZufall"
import GetID from "./components/GetId"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Startseite />} />
          <Route path="/bieruebersicht" element={<BierUebersicht />} />
          <Route path="/bierzufall" element={<BierZufall />} />
          <Route path="/bieruebersicht/:id" element={<GetID />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;