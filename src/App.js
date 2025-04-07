// src/App.js

import React, { useState } from 'react';
import './App.css';
import SudokuInput from './components/SudokuInput';
import SudokuSolver from './components/SudokuSolver';
import SudokuBoard from './components/SudokuBoard';

function App() {
  const [matrix, setMatrix] = useState(null);
  const [solvedMatrix, setSolvedMatrix] = useState(null);

  // Callback when the user submits the puzzle via the input grid
  const handlePuzzleSubmit = (inputMatrix) => {
    console.log('App.js - Received puzzle:', inputMatrix);
    setMatrix(inputMatrix);
    const solver = new SudokuSolver(inputMatrix);
    const solution = solver.solve();
    console.log('App.js - Solved puzzle:', solution);
    setSolvedMatrix(solution);
  };

  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <SudokuInput onSubmit={handlePuzzleSubmit} />

      {matrix && (
        <>
          <h2>Original Puzzle</h2>
          <SudokuBoard board={matrix} />
        </>
      )}

      {solvedMatrix && (
        <>
          <h2>Solved Puzzle</h2>
          <SudokuBoard board={solvedMatrix} />
        </>
      )}
    </div>
  );
}

export default App;
