import React from 'react';
import RenderChart from './renderChart';

const GenericAreaChart = ({
  chartData,
  metaData
}) => {
  if (chartData.length === 1)
    chartData.splice(1, 0, { label: chartData[0].label, value: 0 });
  const baseConfig = {
    forceFit: true,
    color: metaData.color,
    xField: 'label',
    yField: 'value',
    line: {
      size: metaData.line_width
    },
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: {
        isArea: true,
      },
    },
    xAxis: {
      tickCount: metaData.x_axis_tick_count
    },
    yAxis: {
      tickCount: metaData.y_axis_tick_count,
      grid: {
        visible: false,
        line: {
          style: {
            stroke: metaData.stroke_color,
            lineDash: [3]
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
      <RenderChart graphData={chartData} config={baseConfig} chartType="Area" exampleText={'Average Exam scores of a perticular subject'}/>}
    </div>
  );
};

export default GenericAreaChart;





