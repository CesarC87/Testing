import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct color', () => {
  render(<App/>)
  //Encuentra un boton con el nombre "Change to blue"
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})

  //Espera que el back color sea red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  //Click
  fireEvent.click(colorButton);
  // Expect BG to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
  // Expect text to change to "change to red"
  expect(colorButton.textContent).toBe('Change to red')

});
test('button has initial text', () => {
  
});

