import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import './question_screen.css';

export class QuestionScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { userChoice: '__' };
  }

  componentDidMount() {
    this.props.remapButtons(this.buttonActions);
  }

  componentDidUpdate() {
    this.props.remapButtons(this.buttonActions);
  }

  buttonActions = {
    RIGHT: () => this.setState({ userChoice: this.props.right }),
    LEFT: () => this.setState({ userChoice: this.props.left }),
    BOTTOM: () => this.setState({ userChoice: this.props.bottom }),
    TOP: () => this.setState({ userChoice: this.props.top }),
    SCREEN: () => ButtonAction.goToPage(
      { pathname: '/confirmation',
        state: { question: this.props.question,
          answer: this.props.answer,
          userChoice: this.state.userChoice },
      }),
  };

  render() {
    return (
      <div>
        <div className='answer' id='topChoice'>{ this.props.top }</div>
        <div className='answer' id='leftChoice'>{ this.props.left }</div>
        <div id='question'>
          { this.props.question }
          <span id='choice'>{ this.state.userChoice }</span>
        </div>
        <div className='answer' id='rightChoice'>{ this.props.right }</div>
        <div className='answer' id='bottomChoice'>{ this.props.bottom }</div>
      </div>
    );
  }
}

QuestionScreenComponent.propTypes = {
  question: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  remapButtons: PropTypes.func.isRequired,
};

export default WithButtonConfigs(QuestionScreenComponent);
