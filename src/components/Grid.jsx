import React from 'react';

import { GridCell } from './GridCell';
import { randomColourGenerator, getContrastColour } from '../utils';

export const Grid = () => {
  const cells = [];
  for (let i = 0; i < 64; i++) {
    const backgroundColor = randomColourGenerator();
    cells.push({
      backgroundColor,
      color: getContrastColour(backgroundColor),
    });
  }

  return (
    <div className="grid">
      {cells.map((c, i) => (
        <GridCell {...c} key={`cell-${i}`} />
      ))}
    </div>
  );
};
