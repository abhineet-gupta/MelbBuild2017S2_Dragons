import React from 'react';
import PropTypes from 'prop-types';
import './WelcomeScreen.css';
import dragonLogo from './dragon-logo.png';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export const WelcomeScreenComponent = ({ welcome }) => {
  return (
    <div>
      <h1 id='title'> { welcome }</h1>
      <img src={ dragonLogo } alt='Team Dragons' />
      <h2 id='content'>Maths</h2>
    </div>
  );
};

WelcomeScreenComponent.propTypes = {
  welcome: PropTypes.string,
};

WelcomeScreenComponent.defaultProps = {
  welcome: 'Welcome!',
};


export const WelcomeScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/contacts'),
  SCREEN: () => ButtonAction.goToPage('/activity'),
};

export default WithButtonConfigs(WelcomeScreenComponent, WelcomeScreenButtons);
