import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TextWithSeparator = ({ text, symbol, separator }) => {
  const paragraphs = text.split(symbol);
  const lastParagraphIndex = paragraphs.length - 1;

  return paragraphs.map((paragraph, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Fragment key={i}>
      {paragraph}
      {i < lastParagraphIndex && separator}
    </Fragment>
  ));
};

TextWithSeparator.propTypes = {
  text: PropTypes.string.isRequired,
  symbol: PropTypes.oneOf(['\n', '<br/>']),
  separator: PropTypes.node,
};

TextWithSeparator.defaultProps = {
  symbol: '<br/>',
  separator: <br />,
};

export default TextWithSeparator;
