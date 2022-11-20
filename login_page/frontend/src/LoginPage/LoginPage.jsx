import React, { useEffect } from "react"
import { Streamlit } from "streamlit-component-lib"
import NotificationProvider from "../NotificationProvider/NotificationProvider"
import LoginForm from "../LoginForm/LoginForm"
import "../index.css"

export default function LoginPage() {
  return (
    <div className="LoginPage">
      <NotificationProvider>
        <LoginForm />
      </NotificationProvider>
    </div>
  )
}
