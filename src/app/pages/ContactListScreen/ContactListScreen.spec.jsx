import React from 'react';
import { shallow, render } from 'enzyme';
import { ContactListScreen, ContactScreenButtons } from './ContactListScreen';
import ButtonAction from '../../../framework/util/ButtonAction';
import contacts from '../../data/contacts.json';

jest.mock('../../../framework/util/ButtonAction');

describe('ContactListScreen component', () => {
  let componentWrapper;
  beforeEach(() => {
    jest.spyOn(ButtonAction, 'goToPage');
    componentWrapper = shallow(
      <ContactListScreen contacts={ [] } />
    );
  });

  it('should have a title', () => {
    expect(componentWrapper.find('.title')).toBePresent();
  });

  it('should have class[contact-screen]', () => {
    expect(componentWrapper).toHaveClassName('contact-screen');
  });

  it('should contain a GenericList component', () => {
    expect(componentWrapper.find('GenericList')).toBePresent();
  });

  it('should have a LEFT button config of going to Welcome Page', () => {
    ContactScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/welcome');
  });

  it('it should have a RIGHT button config of going to Counter Page with an initial number value of 5', () => {
    ContactScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith({ pathname: '/counter', state: { number: 5 } });
  });

  it('should have a TOP button config of scrolling up', () => {
    ContactScreenButtons.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });

  it('should have a BOTTOM button config of scrolling down', () => {
    ContactScreenButtons.BOTTOM();
    expect(ButtonAction.goToPage).toHaveBeenCalled();
  });

  it('should contain the contact 1', () => {
    const wrapper = render(<ContactListScreen contacts={ contacts } />);
    expect(wrapper.text()).toContain('Contact 1');
  });
});
