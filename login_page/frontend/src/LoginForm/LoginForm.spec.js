import React from "react";
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import LoginForm from './LoginForm';
import { NotificationContext } from "../NotificationProvider/NotificationProvider"

describe("Login Form", () => {

  afterEach(() => {
    cleanup();
  });

  it('Renders the Form fields correctly', () => {
    render(<LoginForm />);
    const accountLocatorInput = screen.getByPlaceholderText(/Account Locator/i);
    expect(accountLocatorInput).toBeInTheDocument();
  
    const usernameInput = screen.getByPlaceholderText(/Username/i);
    expect(usernameInput).toBeInTheDocument();
  
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    expect(passwordInput).toBeInTheDocument();

    const signUpBtn = screen.getByRole("button");
    expect(signUpBtn).toBeInTheDocument();
    expect(signUpBtn).toBeDisabled();
  });

  it('Interactions are working fine', () => {
    render(<LoginForm />);
    const accountLocatorInput = screen.getByPlaceholderText(/Account Locator/i);
    userEvent.type(accountLocatorInput, 'account');
    expect(accountLocatorInput).toHaveValue('account');
  
    const usernameInput = screen.getByPlaceholderText(/Username/i);
    userEvent.type(usernameInput, 'User1');
    expect(usernameInput).toHaveValue('User1');
  
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    userEvent.type(passwordInput, 'pwd123');
    expect(passwordInput).toHaveValue('pwd123');

    const signUpBtn = screen.getByRole("button");
    expect(signUpBtn).toBeEnabled();
  });

  it('Should display notification on form submit', () => {
    const showNotification = jest.fn();
    render(<NotificationContext.Provider value={showNotification}>
      <LoginForm />
    </NotificationContext.Provider>);
    const accountLocatorInput = screen.getByPlaceholderText(/Account Locator/i);
    userEvent.type(accountLocatorInput, 'account');
  
    const usernameInput = screen.getByPlaceholderText(/Username/i);
    userEvent.type(usernameInput, 'User1');
  
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    userEvent.type(passwordInput, 'pwd123');

    const signUpBtn = screen.getByRole("button");
    userEvent.click(signUpBtn);
    expect(showNotification).toHaveBeenCalled();
  });
});
