import React, { useState } from 'react';
import Modal from 'react-modal';
import './ModalPrompt.scss';

Modal.setAppElement('#root');

const ModalPrompt = props => {
  const {
    isOpen,
    setIsOpen,
    mazeRows,
    setMazeRows,
    mazeColumns,
    setMazeColumns
  } = props;
  const [rows, setRows] = useState(mazeRows);
  const [cols, setCols] = useState(mazeColumns);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  const closeModal = (_event, isSave) => {
    if (isSave) {
      setMazeRows(rows);
      setMazeColumns(cols);
    }
    setIsOpen(false);
  };

  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={() => closeModal(null, false)}
    >
      <h1>Enter a number of rows and columns</h1>
      <div>
        <label className="form-element" htmlFor="rows-input">
          Rows:{' '}
        </label>
        <input
          id="rows-input"
          className="form-element"
          type="number"
          aria-label="Rows"
          onChange={event => setRows(event.target.value)}
        ></input>
        <label className="form-element" htmlFor="columns-input">
          Columns:{' '}
        </label>
        <input
          id="columns-input"
          className="form-element"
          type="number"
          aria-label="Columns"
          onChange={event => setCols(event.target.value)}
        ></input>
      </div>
      <div className="button-row">
        <button
          className="btn btn-secondary form-element"
          onClick={event => closeModal(event, false)}
        >
          Close
        </button>
        <button
          className="btn btn-primary form-element"
          onClick={event => closeModal(event, true)}
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default ModalPrompt;
