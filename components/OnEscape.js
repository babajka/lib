import { Component } from 'react';
import PropTypes from 'prop-types';

class OnEscape extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ key }) => {
    const { action } = this.props;
    if (key === 'Escape') {
      action();
    }
  };

  render() {
    return null;
  }
}

OnEscape.propTypes = {
  action: PropTypes.func.isRequired,
};

export default OnEscape;
