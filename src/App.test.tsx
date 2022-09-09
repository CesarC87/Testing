import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct color', () => {
  render(<App />);
  //Encuentra un boton con el nombre "Change to blue"
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  //Espera que el back color sea red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  //Click
  fireEvent.click(colorButton);
  // Expect BG to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  // Expect text to change to "change to red"
  expect(colorButton).toHaveTextContent('Change to red');
});
test('initial conditions', () => {
  render(<App />);
  // Check that the button starts enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  // Check that the checkbox starts unchecked
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  expect(checkBox).not.toBeChecked();

  // Disparamos el checkbox
  fireEvent.click(checkBox);

  // Entonces el boton deberia quedar disabled
  expect(colorButton).toBeDisabled();
});

test('Boton deshabilitado tiene background gris y vuelve a rojo', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });

  //Disable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // //Re-enable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});
test('Boton cambia de color y luego se deshabilita', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });

  // Change to blue
  fireEvent.click(colorButton);

  //Disable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // //Re-enable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});

describe('sapces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for midnight blue', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
