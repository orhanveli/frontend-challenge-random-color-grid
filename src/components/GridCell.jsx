/* eslint-disable react/prop-types */
import React from 'react';

export const GridCell = ({
  backgroundColor,
  color,
  cssClass,
  cellClickHandler,
}) => {
  return (
    <div
      className={`grid-cell ${cssClass}`}
      onClick={cellClickHandler}
      style={{ backgroundColor, color }}
    >
      <div style={{ borderColor: color }}>{backgroundColor}</div>
    </div>
  );
};
