import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '.';

test('renders header with logo and cart', () => {
  render(<Header />);
  const logoElement = screen.getByText(/MKS Sistemas/i);
  const cartElement = screen.getByRole('button', { name: /cart/i });
  expect(logoElement).toBeInTheDocument();
  expect(cartElement).toBeInTheDocument();
});

test('adds item to cart', () => {
  render(<Header />);
  
  const addToCartButtons = screen.getAllByText(/Comprar/i);
  fireEvent.click(addToCartButtons[0]);

  const cartItemCount = screen.getByText(/1/i);
  expect(cartItemCount).toBeInTheDocument();
});

test('increments item quantity in cart', () => {
  render(<Header />);
  
  const addToCartButtons = screen.getAllByText(/Comprar/i);
  fireEvent.click(addToCartButtons[0]);

  const incrementButton = screen.getByText(/\+/i);
  fireEvent.click(incrementButton);

  const cartItemCount = screen.getByText(/2/i);
  expect(cartItemCount).toBeInTheDocument();
});

test('decrements item quantity in cart', () => {
  render(<Header />);
  
  const addToCartButtons = screen.getAllByText(/Comprar/i);
  fireEvent.click(addToCartButtons[0]);

  const incrementButton = screen.getByText(/\+/i);
  fireEvent.click(incrementButton);

  const decrementButton = screen.getByText(/-/i);
  fireEvent.click(decrementButton);

  const cartItemCount = screen.getByText(/1/i);
  expect(cartItemCount).toBeInTheDocument();
});

test('removes item from cart', () => {
  render(<Header />);
  
  const addToCartButtons = screen.getAllByText(/Comprar/i);
  fireEvent.click(addToCartButtons[0]);

  const removeButton = screen.getByLabelText(/remove/i);
  fireEvent.click(removeButton);

  const emptyCartMessage = screen.getByText(/Seu carrinho está vazio/i);
  expect(emptyCartMessage).toBeInTheDocument();
});

test('calculates total price correctly', () => {
  render(<Header />);
  
  const addToCartButtons = screen.getAllByText(/Comprar/i);
  fireEvent.click(addToCartButtons[0]);

  const totalPrice = screen.getByText(/Total: R\$/i);
  expect(totalPrice).toHaveTextContent('Total: R$600.00');
});