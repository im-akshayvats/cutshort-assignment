import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';

function Main() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  )
}

export default Main