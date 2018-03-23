import React, { Component } from 'react';
import { round, sum } from 'lodash';
import { Sparklines, SparklinesCurve, SparklinesReferenceLine } from 'react-sparklines';

import './Chart.css';


class Chart extends Component {

    average = (data) => {
       return round(sum(data)/data.length);
    };

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Sparklines svgHeight={120} svgWidth={250} data={this.props.data} >
                    <SparklinesCurve color={this.props.color} style={{strokeWidth: 2}}/>
                    <SparklinesReferenceLine type='avg'/>
                </Sparklines>
                <div style={{textAlign: 'center'}}>average {this.average(this.props.data)} {this.props.units}</div>
            </div>
        )
    }
}

export default Chart;
