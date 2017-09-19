import React from 'react';
import PropTypes from 'prop-types';

const ElevatorPitchScreen = ({ name }) => {
  return (
    <div>{ name } The watch that does maths. </div>
  );
};

ElevatorPitchScreen.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ElevatorPitchScreen;
