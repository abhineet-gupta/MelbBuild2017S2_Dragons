import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ConfirmationScreen.css';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export class ConfirmationScreenComponent extends Component {
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
    SCREEN: () => this.setState({ name: 'Confirmation!' }),
  };

  render() {
    if (this.props.answer === this.props.userChoice) {
      return (
        <div>
          <div>Your choice: &ensp; { this.props.question } { this.props.userChoice } </div>
          <div>Correct answer: { this.props.question } {this.props.answer}</div>
          <div>Well done!</div>
        </div>
      );
    }
    return (
      <div>
        <div>Your choice: { this.props.question } { this.props.userChoice } </div>
        <div>Correct answer: { this.props.question } {this.props.answer}</div>
        <div>Wrong answer!</div>
      </div>
    );
  }
}

ConfirmationScreenComponent.propTypes = {
  name: PropTypes.string.isRequired,
  remapButtons: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  userChoice: PropTypes.string.isRequired,
};

ConfirmationScreenComponent.defaultProps = {
  name: 'Well done!',
  question: '1 + 2 = ',
  answer: '3',
  userChoice: '3',
};


export default WithButtonConfigs(ConfirmationScreenComponent);
