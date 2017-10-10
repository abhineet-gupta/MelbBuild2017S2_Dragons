import React from 'react';
import { mount } from 'enzyme';
import { ActivityScreenComponent, ActivityScreenButtons } from './ActivityScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

const testProps = {
  topic: 'Addition',
};

describe('ActivityScreenComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ActivityScreenComponent { ...testProps } />);
  });

  it('should have a topic', () => {
    expect(wrapper.find('ActivityScreenComponent').props().topic).toBe(testProps.topic);
  });

  test('it should have a SCREEN button config going to activity screen', () => {
    ActivityScreenButtons.SCREEN();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/question');
  });
});
