/* eslint-disable react/prop-types */
import React from 'react';

export const GridCell = ({ backgroundColor, color, cellClickHandler }) => {
  // const player = useSound('/assets/sounds/small-sweep-transition-166.wav');

  return (
    <div
      className="grid-cell"
      onClick={cellClickHandler}
      style={{ backgroundColor, color }}
    >
      {backgroundColor}
    </div>
  );
};
