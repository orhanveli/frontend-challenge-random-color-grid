import React, { useEffect, useState } from 'react';

import { GridCell } from './GridCell';
import { randomColourGenerator, getContrastColour } from '../utils';
import { useSound } from '../hooks/use-sound';

export const Grid = () => {
  const { audio } = useSound('/assets/sounds/small-sweep-transition-166.wav');

  const [cells, setCells] = useState([]);
  const updatedClassName = 'grid-cell-updated';

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
    const randomCells = [];
    for (let ni = 0; ni < count; ni++) {
      randomCells.push(generateRandomCellIndexExceptThis(notThis));
    }

    setCells((prevCells) => {
      const newCells = prevCells.map((cell, ci) => {
        if (randomCells.indexOf(ci) == -1) {
          return {
            ...cell,
            cssClass: '',
          };
        }
        return generateRandomColoredCell(updatedClassName);
      });
      return newCells;
    });
  };

  const cellClickHandler = (index) => {
    updateRandomCells(3, index);
    audio.currentTime = 0;
    audio.play();
  };

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
          {...cell}
          key={`cell-${x}`}
        />
      ))}
    </div>
  );
};
