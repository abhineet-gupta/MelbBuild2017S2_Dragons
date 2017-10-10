import React from 'react';
import PropTypes from 'prop-types';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import './WelcomeScreen.css';

export const WelcomeScreenComponent = ({ welcome }) => {
  return (
    <div>
      <h1 className='title'> { welcome } <br /> <br /> </h1>
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
