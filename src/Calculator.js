import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handle button click
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Handle calculation
  const calculate = () => {
    try {
      // Safe evaluation using the Function constructor
      const calculatedResult = Function('"use strict";return (' + input + ')')();
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  // Clear the input and result
  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <input type="text" value={input} disabled />
      <div className="result">{result}</div>
      <div className="buttons">
        {/* Dynamically render buttons */}
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '/'].map((char) => (
          <button key={char} onClick={() => handleClick(char)}>{char}</button>
        ))}
      </div>
      <button onClick={calculate}>=</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default Calculator;
