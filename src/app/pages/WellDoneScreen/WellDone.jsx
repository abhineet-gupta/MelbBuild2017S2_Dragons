import React from 'react';
import PropTypes from 'prop-types';
import './WellDone.css';

const WellDoneScreen = ({ name }) => {
  return (
    <div id='message-title'>{ name }</div>
  );
};

WellDoneScreen.propTypes = {
  name: PropTypes.string.isRequired,
};

WellDoneScreen.defaultProps = {
  name: 'Well done!',
};

export default WellDoneScreen;
