/**
 * EmptyData Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const EmptyData = require('../src');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <h2>默认</h2>
        <EmptyData />
        <h2>定制</h2>
        <EmptyData>
          你还没有创建目标哦，马上去
          <a>添加目标</a>
        </EmptyData>
      </div>
    );
  }
}

module.exports = Demo;
