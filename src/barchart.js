import React, { Component } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';

import { Typography, InputNumber } from 'antd';
import RGBPicker from './RGBPicker';

const { Paragraph } = Typography;


class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svg: ''
    }
  }
  // first time
  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.width !== this.props.width ||
        prevProps.height !== this.props.height ||
        !_.isEqual(prevProps.data, this.props.data)
      ) {
      this.clear();
      this.drawChart();
    }
    let { red, green, blue } = this.state;
    if (prevState.red !== red || prevState.green !== green || prevState.blue !== blue) {
      this.clear();
      this.drawChart();
    }
  }

  clear() {
    // const svg = d3.select('#CenterCol').selectAll('svg').remove();
    if (this.state.svg) {
      this.state.svg.remove();
    }
  }

  drawChart(c) {
    const data = this.props.data;
    const w = this.props.width;
    const h = this.props.height;
    const { red, green, blue } = this.state;
    const svg = d3.select("#CenterCol")
    .append('svg')
    .attr('width', w)
    .attr('height', h);
    // add bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => h - 10 * d)
      .attr('width', 65)
      .attr('height', (d, i) => d * 10)
      .attr('fill', (_) => {
        return d3.rgb(red, green, blue);
      });

    // add labels
    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => d)
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => h - (10 * d) - 3);

    this.setState({svg: svg});
  }

  colorHandler = (r, g, b) => {
    this.setState({red: r, green: g, blue: b});

    this.state.svg.selectAll('rect')
      .enter()
      .append('rect')
      .attr('fill', 'blue');
  }


  render() {
    return (
      <div id={'#' + this.props.id}>
        <Paragraph>
          Width (px)
        </Paragraph>
        <InputNumber
          size='large'
          min={200}
          defaultValue={200}
          onChange={this.props.widthHandler}
        />
        <Paragraph>
          Height (px)
        </Paragraph>
        <InputNumber
          size='large'
          min={200}
          max={600}
          defaultValue={200}
          onChange={this.props.heightHandler}
        />
        <RGBPicker
          colorHandler={this.colorHandler}
        />
      </div>
    );
  }
}

export default BarChart;