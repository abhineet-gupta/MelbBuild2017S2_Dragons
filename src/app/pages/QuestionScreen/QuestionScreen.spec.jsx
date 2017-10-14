import React from 'react';
import { mount } from 'enzyme';
import { QuestionScreenComponent } from './QuestionScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

const testProps = {
  question: '1+2=',
  top: '1',
  bottom: '2',
  left: '3',
  right: '4',
  answer: '3',
};

describe('QuestionScreen Component', () => {
  let wrapper;
  let onLoadRemapButtons;
  beforeEach(() => {
    onLoadRemapButtons = jest.fn();
    testProps.remapButtons = onLoadRemapButtons;
    wrapper = mount(<QuestionScreenComponent { ...testProps } />);
  });

  it('should have a question', () => {
    expect(wrapper.find('QuestionScreenComponent').props().question).toBe(testProps.question);
  });

  it('should have a top choice', () => {
    expect(wrapper.find('QuestionScreenComponent').props().top).toBe(testProps.top);
  });

  it('should have a bottom choice', () => {
    expect(wrapper.find('QuestionScreenComponent').props().bottom).toBe(testProps.bottom);
  });

  it('should have a left choice', () => {
    expect(wrapper.find('QuestionScreenComponent').props().left).toBe(testProps.left);
  });

  it('should have a right choice', () => {
    expect(wrapper.find('QuestionScreenComponent').props().right).toBe(testProps.right);
  });

  it('should have a answer', () => {
    expect(wrapper.find('QuestionScreenComponent').props().answer).toBe(testProps.answer);
  });

  it('should call onLoadRemapButtons on componentDidMount', () => {
    expect(onLoadRemapButtons).toHaveBeenCalled();
  });

  it('it should have a TOP button config choosing option (top)', () => {
    wrapper.instance().buttonActions.TOP();
    expect(wrapper.html()).toMatch(testProps.top);
  });

  it('it should have a BOTTOM button config choosing option (bottom)', () => {
    wrapper.instance().buttonActions.BOTTOM();
    expect(wrapper.html()).toMatch(testProps.bottom);
  });

  it('it should have a LEFT button config choosing option (left)', () => {
    wrapper.instance().buttonActions.LEFT();
    expect(wrapper.html()).toMatch(testProps.left);
  });

  it('it should have a RIGHT button config choosing option (right)', () => {
    wrapper.instance().buttonActions.RIGHT();
    expect(wrapper.html()).toMatch(testProps.right);
  });

  it('it should have a SCREEN button config going to the confirmation page', () => {
    wrapper.instance().buttonActions.RIGHT();
    wrapper.instance().buttonActions.SCREEN();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith(
      { pathname: '/confirmation',
        state: { question: testProps.question,
          answer: testProps.answer,
          userChoice: testProps.right } }
    );
  });

  it('it should SCREEN button config of going nowhere without an answer', () => {
    wrapper.instance().buttonActions.SCREEN();
  });
});
