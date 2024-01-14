// frozen_string_literal: true

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home       from './Pages/Home/Home';
import Community  from './Pages/Community/Community';
import Investors  from './Pages/Investors/Investors';

import Header     from './Components/Header/Header';
import Footer     from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/community" element={ <Community /> } />
        <Route path="/investors" element={ <Investors /> } />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
