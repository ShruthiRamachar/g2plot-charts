import React, { useEffect, useRef } from "react";
import { Area as AreaG2 } from "@antv/g2plot";
import { Line as LineG2 } from "@antv/g2plot";
import { Bar as BarG2 } from "@antv/g2plot";
import { Pie as PieG2 } from "@antv/g2plot";
import { Liquid as LiquidG2 } from "@antv/g2plot";
import { DualAxes as DualAxesG2} from "@antv/g2plot";
import { Link } from "react-router-dom";
import BackButton from "./../../images/back-button.png";

const RenderChart = ({ graphData, config, chartType,exampleText }) => {
  const containerRef = useRef();
  const renderPlotRef = useRef();
  let createChart;

  useEffect(() => {
    const renderPlotConfig = {
      ...config,
      data: graphData,
    };

    if (chartType === "Area") {
      createChart = AreaG2;
    } else if (chartType === "StackedBar") {
      createChart = BarG2;
    } else if (chartType === "DualLine") {
      createChart = DualAxesG2;
    } else if (chartType === "Multiline") {
      createChart = LineG2;
    } else if (chartType === "Liquid") {
      createChart = LiquidG2;
    } else if (chartType === "Pie") {
      createChart = PieG2;
    }

    if (containerRef?.current) {
      renderPlotRef.current = new createChart(
        containerRef?.current,
        renderPlotConfig
      );
      renderPlotRef.current.render();
    } else {
      console.log("no container element");
    }
  }, [graphData]);

  return (
    <>
      {/* rendered Chart */}
      <Link to={"/"}>
        <img src={BackButton} className="back-button" />
      </Link>
      <div className="chart-name">{chartType + ' Chart'}</div>
      <div className="example-text">Ex: {exampleText}</div>
      <div className="chart-outer-container">
        <div id="chart-inner-container" ref={containerRef} />
      </div>
    </>
  );
};

export default RenderChart;
