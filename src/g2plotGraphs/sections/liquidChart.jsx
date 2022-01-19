import React from 'react';
import RenderChart from './renderChart';

const GenericLiquidChart = () => {
 
  const baseConfig = {
    percent: 0.25,
    width: 250,
    outline: {
      border: 2,
      distance: 6,
    },
    wave: {
      length: 100,
    },
  };

  return (
    <div className="chart-container">
      <RenderChart config={baseConfig} chartType="Liquid"  exampleText='Profile Completion' />
    </div>
  );
};

export default GenericLiquidChart;





