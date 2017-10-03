import React from 'react';
import PropTypes from 'prop-types';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export const WelcomeScreenComponent = ({ welcome }, { math }) => {
  return (
    <div id='welcome-message'>{ welcome }
      { math }
    </div>
  );
};

WelcomeScreenComponent.propTypes = {
  welcome: PropTypes.string.isRequired,
};

WelcomeScreenComponent.defaultProps = {
  welcome: 'Welcome! Below is the list of subjects:',
  math: 'Math',
};


export const WelcomeScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/contacts'),
};

export default WithButtonConfigs(WelcomeScreenComponent, WelcomeScreenButtons);
