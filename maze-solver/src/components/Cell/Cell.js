import React, { useState } from 'react';
import { CELL_STATES as cellStates } from './Cell.constants';
import './Cell.scss';

const Cell = () => {
  const [cellState, setCellState] = useState(cellStates.background);

  const toggleCellState = () => {
    switch (cellState) {
      case cellStates.background:
        return cellStates.nonBackground;
      case cellStates.nonBackground:
        return cellStates.background;
      case cellStates.path:
        return cellStates.nonBackground;
      case cellStates.temporary:
        return cellStates.temporary;
      default:
        return cellStates.nonBackground;
    }
  };

  const handleClick = (_event, newState) => {
    setCellState(newState || toggleCellState());
  };

  return (
    <div
      className={`cell cell${cellState}`}
      onClick={(event, newState) => handleClick(event, newState)}
    ></div>
  );
};

export default Cell;
