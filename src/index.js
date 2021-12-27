import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MainPage, GamePage} from './Pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Layout} from './components/Layout';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path='game/:gameId' element={<GamePage/>}/>
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
