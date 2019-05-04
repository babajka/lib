import React from 'react';
import PropTypes from 'prop-types';

const Clickable = ({ tag, onClick, children, disabled, ...props }) => {
  const elementProps = {
    ...props,
    onClick,
  };

  if (onClick && !disabled) {
    elementProps.role = 'button';
    elementProps.tabIndex = 0;
    elementProps.onKeyPress = event => {
      if (event.key === 'Enter') {
        onClick(event);
      }
    };
  }

  return React.createElement(tag, elementProps, children);
};

Clickable.propTypes = {
  tag: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

Clickable.defaultProps = {
  tag: 'span',
  children: null,
  onClick: null,
  disabled: false,
};

export default Clickable;
