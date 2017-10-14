import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ConfirmationScreen.css';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export class ConfirmationScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
    this.state = { question: props.question };
    this.state = { answer: props.answer };
    this.state = { userChoice: props.userChoice };

    const c = this.props.answer === this.props.userChoice ? 1 : 0;
    this.state = { correct: c };
  }

  componentDidMount() {
    this.props.remapButtons(this.buttonActions);
  }

  buttonActions = {
    RIGHT: () => ButtonAction.goToPage('/'),
    SCREEN: () => ButtonAction.goToPage(
      { pathname: '/result',
        state: { correct: this.state.correct },
      }),
  };

  render() {
    return (
      <div>
        <div>Your choice: &ensp; { this.props.question } { this.props.userChoice } </div>
        <div>Correct answer: { this.props.question } { this.props.answer }</div>
        <div>
          { (this.props.answer === this.props.userChoice)
              ? <div> Well done! </div>
              : <div> Wrong answer! </div> }
        </div>
      </div>
    );
  }
}

ConfirmationScreenComponent.propTypes = {
  remapButtons: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  userChoice: PropTypes.string.isRequired,
  name: PropTypes.string,
};

ConfirmationScreenComponent.defaultProps = {
  question: '1 + 2 = ',
  answer: '3',
  userChoice: '3',
  name: 'confirmation',
};

export default WithButtonConfigs(ConfirmationScreenComponent);
