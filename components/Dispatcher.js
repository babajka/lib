import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Dispatcher extends Component {
  state = {
    result: null,
    error: null,
    pending: false,
  };

  handleDispatch = (...params) => {
    const { action, dispatch, onSuccess } = this.props;
    this.setState({ pending: true, error: null });
    dispatch(action(...params))
      .then(({ action: responseAction, error }) => {
        if (error) {
          throw new Error(error);
        }
        const { payload: result } = responseAction;
        this.setState({ pending: false, result }, () => onSuccess(result));
      })
      .catch(error => {
        this.setState({ error, pending: false });
      });
  };

  render() {
    const { children } = this.props;
    const { result, error, pending } = this.state;
    return children({ onDispatch: this.handleDispatch, result, error, pending });
  }
}

Dispatcher.propTypes = {
  action: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
};

Dispatcher.defaultProps = {
  onSuccess: () => {},
};

export default connect()(Dispatcher);
