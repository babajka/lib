import React from 'react';
import PropTypes from 'prop-types';

const StopClickPropagation = ({ tag, className, children }) =>
  React.createElement(
    tag,
    {
      className,
      onClick: event => event.stopPropagation(),
    },
    children
  );

StopClickPropagation.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

StopClickPropagation.defaultProps = {
  tag: 'div',
  className: '',
};
