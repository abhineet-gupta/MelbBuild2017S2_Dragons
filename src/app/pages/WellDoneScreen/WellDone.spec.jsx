import React from 'react';
import { mount } from 'enzyme';
import WellDone from './WellDone';

const testProps = {
  name: 'welldone',
};

describe('WellDoneScreen Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<WellDone { ...testProps } />);
  });
  it('should have a name', () => {
    expect(wrapper.find('WellDoneScreen').props().name).toBe(testProps.name);
  });
});
