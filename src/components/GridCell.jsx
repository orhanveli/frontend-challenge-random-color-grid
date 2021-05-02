/* eslint-disable react/prop-types */
import React from 'react';

export const GridCell = ({ backgroundColor, color }) => {
  return (
    <div className="grid-cell" style={{ backgroundColor, color }}>
      {backgroundColor}
    </div>
  );
};
