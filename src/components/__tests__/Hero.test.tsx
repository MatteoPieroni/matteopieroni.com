import * as React from 'react';
import { shallow } from 'enzyme';

import { Hero } from '../Hero';

describe('Hero', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Hero imageSrc="" />);
  });

  it('returns an h1 element', () => {});
});
