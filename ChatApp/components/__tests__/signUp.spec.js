import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ReplyTo from '../ReplyTo';

describe('ReplyTo', () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
  };
  const text = 'Hello, world!';
  const onCancelMock = jest.fn();

  it('displays the user name and text', () => {
    const { getByText } = render(
      <ReplyTo text={text} user={user} onCancel={onCancelMock} />
    );

    const nameElement = getByText(`${user.firstName} ${user.lastName}`);
    const textElement = getByText(text);

    expect(nameElement).toBeDefined();
    expect(textElement).toBeDefined();
  });

 
});
