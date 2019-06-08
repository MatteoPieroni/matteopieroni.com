import * as React from 'react';
import { shallow } from 'enzyme';

import { Hero } from '../Hero';

describe('Hero', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Hero imageSrc="" />);
  });

  it('returns an h1 element', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });
});
