/**
 * EmptyData Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const EmptyData = require('../src');
const Button = require('uxcore-button');

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
        <EmptyData style={{ width: '200px' }} />
        <h2>定制</h2>
        <EmptyData style={{ width: '200px' }}>
          <div style={{ lineHeight: 2 }}>
            <div>你还没有创建目标哦</div>
            <div>马上去<a>添加目标</a></div>
          </div>
        </EmptyData>
        <h2>页面级</h2>
        <EmptyData style={{ width: '200px' }} type="large">
          <div>你还没有创建目标哦</div>
          <Button type="outline" style={{ marginTop: '10px' }}>添加目标</Button>
        </EmptyData>
      </div>
    );
  }
}

module.exports = Demo;
