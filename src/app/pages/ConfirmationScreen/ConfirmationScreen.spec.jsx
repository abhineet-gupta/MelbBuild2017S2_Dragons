import React from 'react';
import { mount } from 'enzyme';
import { ConfirmationScreenComponent } from './ConfirmationScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

const testProps = {
  name: 'Well done!',
  question: '1 + 2 = ',
  answer: '3',
  userChoice: '3',
};

const testPropsIncorrect = {
  name: 'Well done!',
  question: '1 + 2 = ',
  answer: '3',
  userChoice: '4',
};

describe('<ConfirmationScreenComponent />', () => {
  let componentWrapper;
  let onLoadRemapButtons;

  describe('for correct answer', () => {
    beforeEach(() => {
      onLoadRemapButtons = jest.fn();
      testProps.remapButtons = onLoadRemapButtons;
      componentWrapper = mount(<ConfirmationScreenComponent { ...testProps } />);
    });
    it('should have a name', () => {
      expect(componentWrapper.find('ConfirmationScreenComponent').props().name).toBe(testProps.name);
    });

    it('should have a question', () => {
      expect(componentWrapper.find('ConfirmationScreenComponent').props().question).toBe(testProps.question);
    });

    it('should have a user answer', () => {
      expect(componentWrapper.find('ConfirmationScreenComponent').props().userChoice).toBe(testProps.userChoice);
    });

    it('should have a correct answer', () => {
      expect(componentWrapper.find('ConfirmationScreenComponent').props().answer).toBe(testProps.answer);
    });

    it('should call onLoadRemapButtons on componentDidMount', () => {
      expect(onLoadRemapButtons).toHaveBeenCalled();
    });

    it('it should have a RIGHT button config going to the home page', () => {
      componentWrapper.instance().buttonActions.RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    it('it should have a SCREEEN button config that has the text "Well Done!"', () => {
      componentWrapper.instance().buttonActions.SCREEN();
      expect(componentWrapper.html()).toMatch('Well done!');
    });
  });

  describe('for correct answer', () => {
    beforeEach(() => {
      onLoadRemapButtons = jest.fn();
      testPropsIncorrect.remapButtons = onLoadRemapButtons;
      componentWrapper = mount(<ConfirmationScreenComponent { ...testPropsIncorrect } />);
    });
    it('should have a name', () => {
      expect(componentWrapper.find('ConfirmationScreenComponent').props().name).toBe(testPropsIncorrect.name);
    });

    it('should have a question', () => {
      expect(componentWrapper.find('ConfirmationScreenComponent').props().question).toBe(testPropsIncorrect.question);
    });

    it('should have a user answer', () => {
      expect(componentWrapper.find('ConfirmationScreenComponent').props().userChoice)
      .toBe(testPropsIncorrect.userChoice);
    });

    it('should have a correct answer', () => {
      expect(componentWrapper.find('ConfirmationScreenComponent').props().answer).toBe(testPropsIncorrect.answer);
    });

    it('should call onLoadRemapButtons on componentDidMount', () => {
      expect(onLoadRemapButtons).toHaveBeenCalled();
    });

    it('it should have a RIGHT button config going to the home page', () => {
      componentWrapper.instance().buttonActions.RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    it('it should have a SCREEEN button config that has the text "Wrong answer!"', () => {
      componentWrapper.instance().buttonActions.SCREEN();
      expect(componentWrapper.html()).toMatch('Wrong answer!');
    });
  });
});
