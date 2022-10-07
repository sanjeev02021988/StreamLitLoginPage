import React, {useContext} from "react";
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import NotificationProvider, {NotificationContext} from './NotificationProvider';

function TestComponent() {
  const showNotification = useContext(NotificationContext);
  return <button role="button" onClick={() => showNotification(true)}>Notification</button>;
}

describe("Notification Provider", () => {

  afterEach(() => {
    cleanup();
  });

  it('Renders the child correctly', () => {
    render(<NotificationProvider>
      <TestComponent />
    </NotificationProvider>);

    const btnEle = screen.getByRole("button");
    expect(btnEle).toBeInTheDocument();

    userEvent.click(btnEle);

    const toast = screen.getByText("Login Successful");
    expect(toast).toBeInTheDocument();
  });
});
