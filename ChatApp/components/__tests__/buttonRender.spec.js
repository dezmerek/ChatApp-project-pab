import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SubmitButton from '../SubmitButton';

test('renders SubmitButton correctly', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(
    <SubmitButton title="Submit" onPress={onPressMock} />
  );
  const button = getByText('Submit');
  fireEvent.press(button);
  expect(onPressMock).toHaveBeenCalled();
});