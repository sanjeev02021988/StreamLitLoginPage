import React, { useState, useMemo, useCallback, useContext } from "react"
import { TextInput, PasswordInput, Button } from "@mantine/core"
import { default as logo } from "../assets/logo.webp"
import { NotificationContext } from "../NotificationProvider/NotificationProvider"
import "./LoginForm.scss"

/**
 * Login form component, it requires user to fill information like account locator, username & password.
 * @returns {element}
 */
export default function LoginForm() {
  const [state, setState] = useState({})
  const showNotification = useContext(NotificationContext)

  // Variable to check if the form is in valid state or not.
  const isFormValid = useMemo(() => {
    const { username, accountLocator, password } = state
    return username && password && accountLocator
  }, [state])

  // Function for handling on change event for all the form fields.
  const onChange = useCallback((event) => {
    const { value, dataset } = event.target
    setState((state) => ({ ...state, [dataset.field]: value }))
  }, [])

  // Function for handling sing up (form submit).
  const onLogin = useCallback(() => {
    showNotification(true)
  }, [showNotification])

  return (
    <div className="LoginForm">
      <div className="Header">
        <div className="Brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="Title">Sign up using Snowflake account</div>
      </div>
      <div className="Form">
        <TextInput
          className="InputWrapper"
          onChange={onChange}
          data-field="accountLocator"
          placeholder="Account locator"
        />
        <TextInput
          className="InputWrapper"
          onChange={onChange}
          data-field="username"
          placeholder="Username"
        />
        <PasswordInput
          className="InputWrapperPassword"
          onChange={onChange}
          data-field="password"
          placeholder="Password"
        />
        <span className="Declaration">
          By signing up, I agree to the{" "}
          <a href="https://samooha.tech">Terms of Service</a> and{" "}
          <a href="https://samooha.tech">Privacy policy</a>.
        </span>
        <Button onClick={onLogin} className="Button" disabled={!isFormValid}>
          Sign up
        </Button>
      </div>
      <div className="Footer">
        Note: You can later login to Samooha as a <br />
        <b>Provider</b> or a <b>Consumer</b>
      </div>
    </div>
  )
}
