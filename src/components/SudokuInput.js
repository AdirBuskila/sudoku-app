// src/components/SudokuInput.js

import React, { useState } from 'react';

function SudokuInput({ onSubmit }) {
  const [cells, setCells] = useState(Array(81).fill(''));

  const handleChange = (index, value) => {
    const newCells = [...cells];
    newCells[index] = value;
    setCells(newCells);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matrix = [];
    for (let row = 0; row < 9; row++) {
      const rowValues = [];
      for (let col = 0; col < 9; col++) {
        const val = cells[row * 9 + col];
        const num = parseInt(val, 10);
        rowValues.push(isNaN(num) ? 0 : num);
      }
      matrix.push(rowValues);
    }
    onSubmit(matrix);
  };

  // Helper to assign classes based on cell position for thick borders
  const getCellClasses = (index) => {
    const classes = ['cell'];
    const row = Math.floor(index / 9);
    const col = index % 9;
    if (col % 3 === 0) classes.push('left');
    if ((col + 1) % 3 === 0) classes.push('right');
    if (row % 3 === 0) classes.push('top');
    if ((row + 1) % 3 === 0) classes.push('bottom');
    return classes.join(' ');
  };

  return (
    <form onSubmit={handleSubmit} className="SudokuInput">
      <h2>Enter Sudoku Puzzle</h2>
      <div className="grid">
        {cells.map((cell, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={cell}
            onChange={(e) => handleChange(index, e.target.value)}
            className={getCellClasses(index)}
          />
        ))}
      </div>
      <button type="submit">Solve Puzzle</button>
    </form>
  );
}

export default SudokuInput;
