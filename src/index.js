import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MainPage, GamePage} from './Pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Layout} from './components/Layout';
import {Provider} from 'react-redux';
import {store} from './Redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='game/:gameId' element={<GamePage/>}/>
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
