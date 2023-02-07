import * as React from 'react';

import {
    render,
    screen,
} from '@testing-library/react';

describe('Section', () => {
  let target: any;

  beforeEach(() => {
    render(
        <></>
    );
    target = screen.getByText('Hello');
  });

  it('renders Initial Render', () => {
    expect(!!target).toBe(false);
  });
});
