import React from 'react';
import { Header } from '../';
import { Maze } from '../';
import { MazeSolver } from '../';
import './App.scss';

const App = () => (
  <div id="app">
    <Header />
    <MazeSolver />
  </div>
);

export default App;
