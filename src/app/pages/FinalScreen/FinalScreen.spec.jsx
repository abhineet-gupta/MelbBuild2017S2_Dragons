import React from 'react';
import { shallow } from 'enzyme';
import { FinalScreenComponent, FinalScreenButtonActions } from './FinalScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<FinalScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<FinalScreenComponent />);
    jest.resetAllMocks();
  });

  it('should contain text Do It Again', () => {
    expect(componentWrapper).toIncludeText('Do It Again');
  });

  it('should contain text Return Home', () => {
    expect(componentWrapper).toIncludeText('Return Home');
  });

  it('it should have a RIGHT button config going to the welcome page', () => {
    FinalScreenButtonActions.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/welcome');
  });

  it('it should have a LEFT button config going to questions', () => {
    FinalScreenButtonActions.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/question');
  });
});
