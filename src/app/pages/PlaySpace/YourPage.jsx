import React from 'react';
import PropTypes from 'prop-types';
import './YourPage.css';

const YourPage = ({ name }) => {
  return (
    <div id='message-title'><h1>{ name }</h1></div>
  );
};
YourPage.propTypes = {
  name: PropTypes.string.isRequired,
};

YourPage.defaultProps = {
  name: 'Hello World!',
};

export default YourPage;
