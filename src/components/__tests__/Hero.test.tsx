import * as React from 'react';

import { Hero } from '../Hero';
import { mountWithTheme, mockTheme } from '../../test-utilities';

describe('Mounted Hero', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mountWithTheme(<Hero />, mockTheme);
  });

  it('returns an h1 element', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });
  it('returns a picture element with 1 img and 2 sources', () => {
    expect(wrapper.find('picture').length).toEqual(1);
    expect(wrapper.find('picture img').length).toEqual(1);
    expect(wrapper.find('picture source').length).toEqual(2);
  });
  it('returns a container section element', () => {
    expect(wrapper.find('section').length).toEqual(1);
  });
});
