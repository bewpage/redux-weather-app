import React, { Component } from 'react';
import _ from 'lodash';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from 'recharts';



class Rechart extends Component {

    average = (data) => {
        return _.round(_.sum(data)/data.length);
    };

    render() {
            console.log('this.props.data', this.props.data);
        return (
            <div>
                <ResponsiveContainer  height={120} width='90%' >
                    <AreaChart data={this.props.data}
                               margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Area type="monotone" dataKey="value" stroke="#8884d8" r={1} />
                    </AreaChart>
                </ResponsiveContainer >
                {/*<div style={{textAlign: 'center'}}>average {this.average(this.props.data)} {this.props.units}</div>*/}
            </div>
        )
    }
}

export default Rechart;
