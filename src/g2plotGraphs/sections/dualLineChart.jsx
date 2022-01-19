import React from 'react';
import RenderChart from './renderChart';

const GenericDualLineChart = ({
  chartData
}) => {
  const baseConfig = {
    // forceFit: true,
    // height: 290,
    xField: 'year',
  yField: ['sales', 'profit_margin'],
  geometryOptions: [
    {
      geometry: 'line',
      color: '#5B8FF9',
    },
    {
      geometry: 'line',
      color: '#5AD8A6',
    },
  ],
  };

  return (
    <div className="chart-container">
      {chartData.length === 0 ? 
        <div className="no-data-indicator">No Data</div>
       :
      <RenderChart graphData={chartData} config={baseConfig} chartType="DualLine"  exampleText='Sales Vs Profit Margin'/>}
    </div>
  );
};

export default GenericDualLineChart;





