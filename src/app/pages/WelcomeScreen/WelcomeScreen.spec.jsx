import React from 'react';
import { mount } from 'enzyme';
import { WelcomeScreenComponent, WelcomeScreenButtons } from './WelcomeScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

const testProps = {
  welcome: 'Welcome! Below is the list of subjects:',
  math: 'Math',
};

describe('WelcomeScreen Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<WelcomeScreenComponent { ...testProps } />);
  });

  it('should have a welcome', () => {
    expect(wrapper.find('WelcomeScreenComponent').props().welcome).toBe(testProps.welcome);
  });

  test('it should have some content', () => {
    expect(homeScreenComponent.find('#welcome-message')).toBePresent();
  });

  test('it should have a RIGHT button config of going to contact page', () => {
    WelcomeScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/contacts');
  });

  test('it should have a LEFT button config of going to home page', () => {
    WelcomeScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });



});
