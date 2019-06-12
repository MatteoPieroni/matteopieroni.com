import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { TechnologiesBar } from '../TechnologiesBar';
import GliderComponent from 'react-glider-carousel';

describe('TechnologiesBar', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<TechnologiesBar />);
  });

  it('returns an h2 element', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  });
});

describe('TechnologiesBar mounted', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<TechnologiesBar />);
  });

  it('returns an section element', () => {
    expect(wrapper.find('section').length).toEqual(1);
  });
  it('returns at least one svg', () => {
    expect(wrapper.find('svg').length).toBeGreaterThanOrEqual(1);
  });
  it('returns at least one label', () => {
    expect(wrapper.find('label').length).toBeGreaterThanOrEqual(1);
  });
  it('returns a GliderComponent', () => {
    expect(wrapper.containsMatchingElement(<GliderComponent />));
  });
});
