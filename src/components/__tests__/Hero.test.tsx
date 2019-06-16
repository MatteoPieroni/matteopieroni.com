import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { Hero } from '../Hero';

const fakeThemeFn = (e: boolean) => {};

describe('Hero', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Hero />);
  });

  it('returns an h1 element', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });
  it('returns a picture element with 1 img and 2 sources', () => {
    expect(wrapper.find('picture').length).toEqual(1);
    expect(wrapper.find('picture img').length).toEqual(1);
    expect(wrapper.find('picture source').length).toEqual(2);
  });
});

describe('Mounted Hero', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<Hero />);
  });

  it('returns a container section element', () => {
    expect(wrapper.find('section').length).toEqual(1);
  });
});
