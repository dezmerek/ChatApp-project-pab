import React from 'react';
import { render } from '@testing-library/react-native';
import AboutUs from '../../screens/AboutUs';

describe('AboutUs', () => {
  test('renders correctly', () => {
    const { getByText, getAllByTestId } = render(<AboutUs />);

    // Test the presence of specific elements on the screen
    const titleText = getByText('O nas');
    const appDescription = getByText('Aplikacja RealTime chat');
    const memberBoxes = getAllByTestId('memberBox');

    expect(titleText).toBeTruthy();
    expect(appDescription).toBeTruthy();
    expect(memberBoxes.length).toBe(3);
  });
});
