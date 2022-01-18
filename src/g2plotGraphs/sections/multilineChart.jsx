import React from 'react';
import RenderChart from './renderChart';

const GenericMultilineChart = ({
  chartData
}) => {
  if (chartData.length === 1)
    chartData.splice(1, 0, { label: chartData[0].label, value: 0 });
  const baseConfig = {
    forceFit: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      tickCount: 10  
    },
    yAxis: {
      tickCount: 8,
      grid: {
        line: {
          style: {
            stroke: '#E3E3E3',
            lineDash: [4]
          }
        }
      }
    },
    tooltip: {
      visible: true,
      showCrosshairs: false,
      showMarkers: true
    }
  };

  return (
    <div className="chart-container">
      {chartData.length === 0 ? 
        <div className="no-data-indicator">No Data</div>
      :
      <RenderChart graphData={chartData} config={baseConfig} chartType="Multiline" />}
    </div>
  );
};

export default GenericMultilineChart;





