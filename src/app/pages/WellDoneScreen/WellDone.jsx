import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WellDone.css';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export class WellDoneScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  componentDidMount() {
    this.props.remapButtons(this.buttonActions);
  }

  componentDidUpdate() {
    this.props.remapButtons(this.buttonActions);
  }

  buttonActions = {
    RIGHT: () => ButtonAction.goToPage('/'),
    LEFT: () => ButtonAction.goToPage('/contacts'),
    BOTTOM: () => this.setState({ name: 'Bottom button pressed.' }),
    TOP: () => this.setState({ name: 'Top button pressed.' }),
    SCREEN: () => this.setState({ name: 'Well done!' }),
  };

  render() {
    return (
      <div><strong>{ this.state.name }</strong></div>
    );
  }
}

WellDoneScreenComponent.propTypes = {
  name: PropTypes.string.isRequired,
  remapButtons: PropTypes.func.isRequired,
};

WellDoneScreenComponent.defaultProps = {
  name: 'Well done!',
};


export default WithButtonConfigs(WellDoneScreenComponent);
