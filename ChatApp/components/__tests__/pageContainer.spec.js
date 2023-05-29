import React from 'react';
import { render } from '@testing-library/react-native';
import PageContainer from '../PageContainer';

describe('PageContainer', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<PageContainer />);
    const container = getByTestId('pageContainer');

    expect(container).toBeTruthy();
  });
});
