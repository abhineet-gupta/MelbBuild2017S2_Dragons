import React from 'react';
import Date from '../../../framework/components/Date/Date';
import Time from '../../../framework/components/Time/Time';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

import logo from './logo.png';


export const HomeScreenComponent = () => {
  return (
    <div id='watch-home-page'>
      <Date />
      <Time />
      <div id='home-page-content'>
        {/* TODO: Logo to be replaced w/ custom logo */}
        <img src={ logo } alt='logo' />

        <div>Dragonwatch Activated!</div>

        <p>
          EXPLAIN PARA 1.
        </p>

        <p>
          EXPLAIN PARA 2.
        </p>
      </div>
    </div>
  );
};

export const HomeScreenButtons = {
  LEFT: () => ButtonAction.goToPage({ pathname: '/counter', state: { number: 5 } }),
  RIGHT: () => ButtonAction.goToPage('/welcome'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(HomeScreenComponent, HomeScreenButtons);
