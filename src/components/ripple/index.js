import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './ripple.scss';

class Ripple extends Component {
  static propTypes = {
    cursorPos: PropTypes.object,
  };

  state = {
    animate: false,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  };

  reppling(cursorPos) {
    const ripple = this.ripple;
    const button = ripple.parentElement;

    const buttonPos = button.getBoundingClientRect();

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth);

    const centerize = rippleWidthShouldBe / 2;

    this.setState({
      animate: true,
      width: rippleWidthShouldBe,
      height: rippleWidthShouldBe,
      top: cursorPos.top - buttonPos.top - centerize,
      left: cursorPos.left - buttonPos.left - centerize,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { animate } = this.state;
    const { cursorPos } = this.props;
    const nextCursorPos = nextProps.cursorPos;

    if (nextCursorPos.time !== cursorPos.time) {
      if (animate) {
        this.setState({ animate: false }, () => {
          this.reppling(nextCursorPos);
        });
      } else this.reppling(nextCursorPos);
    }
  }

  render() {
    const { animate, top, left, width, height } = this.state;

    return (
      <div
        className={cn(styles.ripple, animate && styles.isReppling)}
        ref={el => (this.ripple = el)}
        style={{
          top: top + 'px',
          left: left + 'px',
          width: width + 'px',
          height: height + 'px',
        }}
      />
    );
  }
}

export default Ripple;
