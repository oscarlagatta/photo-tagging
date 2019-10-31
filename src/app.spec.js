import React from 'react';
import { render } from '@testing-library/react';

import App from './app';

describe('app component', () => {
  it('renders without error', () => {
    render(<App />);
  });
});

/**
 * 
 PASS  src/app.spec.js
  app component
    √ runs and passes (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        4.735s
Ran all test suites.

 */
