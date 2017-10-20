/**
 * EmptyData Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
const classnames = require('classnames');
const PropTypes = require('prop-types');

class EmptyData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const me = this;
    const { prefixCls, children, type, icon, largeIcon, style, className } = me.props;
    const iconMap = {
      normal: icon,
      large: largeIcon,
    };
    return (
      <div
        className={classnames({
          [`${prefixCls} ${type}`]: true,
          [className]: !!className,
        })}
        style={style}
      >
        <div
          className={`${prefixCls}-icon`}
          style={{
            backgroundImage: `url(${iconMap[type]})`,
          }}
        />
        <div className={`${prefixCls}-content`}>{children}</div>
      </div>
    );
  }
}

EmptyData.defaultProps = {
  prefixCls: 'kuma-empty-data',
  children: '暂无数据',
  type: 'normal',
  icon: 'https://img.alicdn.com/tps/TB1SFFFOpXXXXXzXVXXXXXXXXXX-166-168.png',
  largeIcon: 'https://img.alicdn.com/tps/TB1oWW_OXXXXXXyapXXXXXXXXXX-390-390.png',
};


// http://facebook.github.io/react/docs/reusable-components.html
EmptyData.propTypes = {
  prefixCls: PropTypes.string,
  icon: PropTypes.string,
  largeIcon: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(['normal', 'large']),
};

EmptyData.displayName = 'EmptyData';

module.exports = EmptyData;
