import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { Streamlit } from "streamlit-component-lib";
import LoginPage from "./LoginPage";

jest.mock("streamlit-component-lib", () => ({
  Streamlit: {
    setFrameHeight: jest.fn()
  },
}));

describe("Login Page", () => {

  afterEach(() => {
    cleanup();
  });
  
  it("Renders correctly", () => {
    render(<LoginPage />);

    const loginFormTitle = screen.getByText(/Sign up using Snowflake account/i);
    expect(loginFormTitle).toBeInTheDocument();

    expect(Streamlit.setFrameHeight).toHaveBeenCalled();
  });
});
