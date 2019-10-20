import React, { useState } from 'react';
import { ModalPrompt } from '../';
import { Maze } from '../';

const MazeSolver = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <ModalPrompt
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mazeRows={rows}
        setMazeRows={setRows}
        mazeColumns={columns}
        setMazeColumns={setColumns}
      />
      <Maze rows={rows} columns={columns} />
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Edit Maze
      </button>
    </>
  );
};

export default MazeSolver;
