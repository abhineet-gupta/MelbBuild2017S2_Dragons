import React from 'react';
import { mount } from 'enzyme';
import { WellDoneScreenComponent } from './WellDone';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

const testProps = {
  name: 'welldone',
};

describe('<WellDoneScreenComponent />', () => {
  let componentWrapper;
  let onLoadRemapButtons;

  beforeEach(() => {
    onLoadRemapButtons = jest.fn();
    componentWrapper = mount(<WellDoneScreenComponent { ...testProps } />);
  });
  it('should have a name', () => {
    expect(componentWrapper.find('WellDoneScreen').props().name).toBe(testProps.name);
  });

  it('should call onLoadRemapButtons on componentDidMount', () => {
    expect(onLoadRemapButtons).toHaveBeenCalled();
  });

  it('it should have a TOP button config that has the text "Top button pressed."', () => {
    componentWrapper.instance().buttonActions.TOP();
    expect(componentWrapper).toHaveText('Top button pressed.');
  });

  it('it should have a BOTTOM button config that has the text "Bottom button pressed."', () => {
    componentWrapper.instance().buttonActions.BOTTOM();
    expect(componentWrapper).toHaveText('Bottom button pressed.');
  });

  it('it should have a RIGHT button config going to the home page', () => {
    componentWrapper.instance().buttonActions.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });

  it('it should have a LEFT button config going to contacts', () => {
    componentWrapper.instance().buttonActions.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/contacts');
  });

  it('it should have a SCREEEN button config that has the text "Well Done!"', () => {
    componentWrapper.instance().buttonActions.SCREEN();
    expect(ButtonAction.goToPage).toHaveText('Well done!');
  });
});
