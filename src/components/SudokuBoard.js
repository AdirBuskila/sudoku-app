// src/components/SudokuBoard.js

import React from 'react';

function SudokuBoard({ board, title }) {
  return (
    <div className="SudokuBoard">
      {title && <h2>{title}</h2>}
      <div className="board">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const classes = [];
            if (colIndex % 3 === 0) classes.push('left');
            if ((colIndex + 1) % 3 === 0) classes.push('right');
            if (rowIndex % 3 === 0) classes.push('top');
            if ((rowIndex + 1) % 3 === 0) classes.push('bottom');
            return (
              <div key={`${rowIndex}-${colIndex}`} className={classes.join(' ')}>
                {cell === 0 ? '' : cell}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default SudokuBoard;
