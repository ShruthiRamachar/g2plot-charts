import G2PlotGraph from "./g2plotGraphs/index";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AreaChart from "./g2plotGraphs/sections/areaChart";
import StackedBarChart from "./g2plotGraphs/sections/stackedBarChart";
import DualLineChart from "./g2plotGraphs/sections/dualLineChart";
import MultilineChart from "./g2plotGraphs/sections/multilineChart";
import LiquidChart from "./g2plotGraphs/sections/liquidChart";
import PieChart from "./g2plotGraphs/sections/pieChart";
import { ChartData } from "./g2plotGraphs/sections/chartData";
import { MetaData } from "./g2plotGraphs/sections/metaData";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={false} path="/areaChart">
          <AreaChart chartData={ChartData.AreaChartData} metaData={MetaData.AreaChartMetadata} />
        </Route>
        <Route exact={false} path="/barChart">
          <StackedBarChart chartData={ChartData.StackedBarChartData} />
        </Route>
        <Route exact={false} path="/dualAxesChart">
          <DualLineChart
            chartData={[ChartData.DualLineData, ChartData.DualLineData]}
          />
        </Route>
        <Route exact={false} path="/multiLineChart">
          <MultilineChart chartData={ChartData.MultilineChartData} />
        </Route>
        <Route exact={false} path="/liquidChart">
          <LiquidChart />
        </Route>
        <Route exact={false} path="/pieChart">
          <PieChart chartData={ChartData.PieChartData} />
        </Route>
        <Route exact={false} path="/">
          <G2PlotGraph />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
