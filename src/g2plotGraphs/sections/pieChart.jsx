import React from 'react';
import RenderChart from './renderChart';

const GenericPieChart = ({
  chartData
}) => {
  if (chartData.length === 1)
    chartData.splice(1, 0, { label: chartData[0].label, value: 0 });
    const baseConfig = {
      appendPadding: 10,
      angleField: 'value',
      colorField: 'type',
      radius: 0.9,
      label: {
        type: 'inner',
        offset: '-30%',
        content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: 14,
          textAlign: 'center',
        },
      },
      interactions: [{ type: 'element-active' }]
      };

  return (
    <div className="chart-container">
      {chartData.length === 0 ? 
        <div className="no-data-indicator">No Data</div>
      :
      <RenderChart graphData={chartData} config={baseConfig} chartType="Pie"  exampleText='Cost of Construction of House' />}
    </div>
  );
};

export default GenericPieChart;





