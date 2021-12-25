import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MainPage, GamePage} from './Pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/game/:gameId' element={<GamePage/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);
