import React from 'react';
import RenderChart from './renderChart';

const GenericStackedChart = ({
  chartData
}) => {
  if (chartData.length === 1)
    chartData.splice(1, 0, { label: chartData[0].label, value: 0 });
    const baseConfig = {
      forceFit: true,
      isStack: true,
      xField: 'value',
      yField: 'year',
      seriesField: 'type',
      label: {
        position: 'middle',
       layout: [
          { type: 'interval-adjust-position' },
          { type: 'interval-hide-overlap' },
          { type: 'adjust-color' },
        ],
      },
    };

  return (
    <div className="chart-container">
      {chartData.length === 0 ? 
        <div className="no-data-indicator">No Data</div>
      :
      <RenderChart graphData={chartData} config={baseConfig} chartType="StackedBar" />}
    </div>
  );
};

export default GenericStackedChart;





