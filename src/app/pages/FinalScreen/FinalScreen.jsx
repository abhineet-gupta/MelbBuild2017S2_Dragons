import React from 'react';

import './FinalScreen.css';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export const FinalScreenComponent = () => {
  return (
    <div>
      <div className='option' id='leftOption'> &lt; Do It Again </div>

      <div className='option' id='rightOption'> Return Home &gt;</div>
    </div>
  );
};

export const FinalScreenButtonActions = {
  RIGHT: () => ButtonAction.goToPage('/welcome'),
  LEFT: () => ButtonAction.goToPage('/question'),
};

export default WithButtonConfigs(FinalScreenComponent, FinalScreenButtonActions);
