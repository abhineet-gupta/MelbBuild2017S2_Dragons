import React from 'react';
import PropTypes from 'prop-types';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import './result_screen.css';

export const ResultScreenComponent = ({ total, correct }) => {
  return (
    <div className='result'>
      { correct }/{ total }
    </div>
  );
};

export const ResultScreenButtons = {
  SCREEN: () => ButtonAction.goToPage('/'),
};

ResultScreenComponent.propTypes = {
  total: PropTypes.string,
  correct: PropTypes.string.isRequired,
};

ResultScreenComponent.defaultProps = {
  total: 1,
  correct: 0,
};


export default WithButtonConfigs(ResultScreenComponent, ResultScreenButtons);
