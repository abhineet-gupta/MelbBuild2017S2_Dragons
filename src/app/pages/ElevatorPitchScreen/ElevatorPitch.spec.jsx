import React from 'react';
import { mount } from 'enzyme';
import ElevatorPitch from './ElevatorPitch';

const testProps = {
  name: 'test',
};

describe('ElevatorPitchScreen Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ElevatorPitch { ...testProps } />);
  });
  it('should have a name', () => {
    expect(wrapper.find('ElevatorPitchScreen').props().name).toBe(testProps.name);
  });
});
