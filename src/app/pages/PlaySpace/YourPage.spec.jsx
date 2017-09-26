import React from 'react';
import { mount } from 'enzyme';
import YourPage from './YourPage';

const testProps = {
  name: 'test',
};
describe('YourPage Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<YourPage { ...testProps } />);
  });
  it('should have a name', () => {
    expect(wrapper.find('YourPage').props().name).toBe(testProps.name);
  });
});
