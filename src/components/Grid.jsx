import React, { useEffect, useState } from 'react';

import { GridCell } from './GridCell';
import { randomColourGenerator, getContrastColour } from '../utils';

export const Grid = () => {
  const [cells, setCells] = useState([]);

  const generateRandomColoredCell = (cssClass = '') => {
    const backgroundColor = randomColourGenerator();
    const color = getContrastColour(backgroundColor);
    return {
      cssClass,
      backgroundColor,
      color,
    };
  };

  const generateRandomCellIndexExceptThis = (exceptThisOne) => {
    const randomCellIndex = Math.floor(Math.random() * 63);
    return exceptThisOne == randomCellIndex
      ? generateRandomCellIndexExceptThis(exceptThisOne)
      : randomCellIndex;
  };

  const updateRandomCells = (count = 1, notThis) => {
    setCells((prevCells) => {
      const newCells = [...prevCells];
      for (let ci = 0; ci < count; ci++) {
        const randomCellIndex = generateRandomCellIndexExceptThis(notThis);
        newCells.splice(
          randomCellIndex,
          1,
          generateRandomColoredCell('grid-cell-updated'),
        );
      }
      return newCells;
    });
  };

  const cellClickHandler = (index) => {
    updateRandomCells(3, index);
    // console.log(index)
  }

  useEffect(() => {
    const tempCells = [];
    for (let i = 0; i < 64; i++) {
      tempCells.push(generateRandomColoredCell());
    }
    setCells(tempCells);
  }, []);

  return (
    <div className="grid">
      {cells.map((cell, x) => (
        <GridCell
          cellClickHandler={() => cellClickHandler(x)}
          backgroundColor={cell.backgroundColor}
          color={cell.color}
          key={`cell-${x}`}
        />
      ))}
    </div>
  );
};
