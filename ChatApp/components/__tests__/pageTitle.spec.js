import React from 'react';
import { render } from '@testing-library/react-native';
import PageTitle from '../PageTitle';

describe('PageTitle', () => {
  it('renders correctly', () => {
    const { getByText } = render(<PageTitle text="Example Title" />);
    const titleText = getByText('Example Title');

    expect(titleText).toBeTruthy();
  });
});
