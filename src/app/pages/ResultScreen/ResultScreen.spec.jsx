import React from 'react';
import { mount } from 'enzyme';
import { ResultScreenComponent, ResultScreenButtons } from './ResultScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

const testProps = {
  correct: '0',
  total: '1',
};

describe('ResultScreen Component', () => {
  let wrapper;
  beforeEach(() => {
    jest.spyOn(ButtonAction, 'goToPage');
    wrapper = mount(<ResultScreenComponent { ...testProps } />);
  });

  it('should have a correct mark', () => {
    expect(wrapper.find('ResultScreenComponent').props().correct).toBe(testProps.correct);
  });

  it('should have a total mark', () => {
    expect(wrapper.find('ResultScreenComponent').props().total).toBe(testProps.total);
  });

  it('it should have a SCREEN button config going to the home page', () => {
    ResultScreenButtons.SCREEN();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });
});
