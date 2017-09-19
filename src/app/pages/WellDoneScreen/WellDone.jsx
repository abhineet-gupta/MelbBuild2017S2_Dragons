import React from 'react';
import PropTypes from 'prop-types';

const WellDoneScreen = ({ name }) => {
  return (
    <div><strong>{ name }</strong></div>
  );
};

WellDoneScreen.propTypes = {
  name: PropTypes.string.isRequired,
};

WellDoneScreen.defaultProps = {
  name: 'Well done!',
};

export default WellDoneScreen;
