import React from 'react';
import PropTypes from 'prop-types';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import './ActivityScreen.css';

export const ActivityScreenComponent = ({ topic }) => {
  return (
    <div id='topic'> { topic } </div>
  );
};

ActivityScreenComponent.propTypes = {
  topic: PropTypes.string,
};

ActivityScreenComponent.defaultProps = {
  topic: 'Addition',
};


export const ActivityScreenButtons = {
  SCREEN: () => ButtonAction.goToPage('/question'),
};

export default WithButtonConfigs(ActivityScreenComponent, ActivityScreenButtons);
