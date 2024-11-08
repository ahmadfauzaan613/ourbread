import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Linktree from './pages/Linktree'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linktree" element={<Linktree />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
