import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Ripple from '../ripple';

import styles from './button.scss';

class Button extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    disabled: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string,
  };

  state = {
    cursorPos: {
      top: 0,
      left: 0,
      time: Date.now(),
    },
  };

  handleClick = e => {
    const cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now(),
    };
    this.setState({ cursorPos });
  };

  render() {
    const { children, disabled, primary, secondary } = this.props;
    const { cursorPos } = this.state;

    return (
      <button
        disabled={disabled}
        className={cn(styles.button, {
          [styles.primary]: primary,
          [styles.secondary]: secondary,
        })}
        onMouseUp={this.handleClick}
        onTouchEnd={this.handleClick}
      >
        {children}
        <Ripple cursorPos={cursorPos} />
      </button>
    );
  }
}

export default Button;
