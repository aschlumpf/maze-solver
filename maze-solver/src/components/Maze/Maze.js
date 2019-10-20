import React from 'react';
import { Cell } from '../';
import './Maze.scss';

const Maze = ({ rows, columns }) => {
  // const colClass = `col-${12 / columns}`;

  const buildMaze = () => {
    const maze = [];
    for (let i = 0, key = rows; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++, key++) {
        row.push(key);
      }
      maze.push(row);
    }
    return maze;
  };

  return (
    <div className="maze">
      {buildMaze().map((row, index) => (
        <div key={index} className="maze-row">
          {row.map(cell => (
            <Cell key={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Maze;
