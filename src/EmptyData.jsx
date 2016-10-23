/**
 * EmptyData Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');

class EmptyData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const me = this;
    const { prefixCls, children } = me.props; 
    return (
      <div className={`${prefixCls}`}>
        <i className="kuma-icon kuma-icon-smile" />
        <div className={`${prefixCls}-content`}>{children}</div>
      </div>
    );
  }
}

EmptyData.defaultProps = {
  prefixCls: 'kuma-empty-data',
  children: '暂无数据',
};


// http://facebook.github.io/react/docs/reusable-components.html
EmptyData.propTypes = {
};

EmptyData.displayName = 'EmptyData';

module.exports = EmptyData;
