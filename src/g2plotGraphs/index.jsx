import React from 'react';
import { Link } from "react-router-dom";

class G2PlotOuterContainer extends React.Component{
    render(){
     return(      
          <div className='g2plot-container'>
              <div className='main-header'>AntV G2Plot Charts</div>
              <ul>
              <li ><Link className='sub-header' to='/areaChart'>Area Chart</Link></li><br/>
              <li ><Link className='sub-header' to='/barChart'>Bar Chart</Link></li><br/>
              <li ><Link className='sub-header' to='/dualAxesChart'>Dual Axes Chart</Link></li><br/>
              <li > <Link className='sub-header' to='/multiLineChart'>Line Chart</Link></li><br/>
              <li > <Link className='sub-header' to='/liquidChart'>Liquid Chart</Link></li><br/>
              <li > <Link className='sub-header' to='/pieChart'>Pie Chart</Link></li><br/>
              </ul>
        </div>
        )
    }
}

export default G2PlotOuterContainer;