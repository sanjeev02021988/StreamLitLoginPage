import React, { useEffect } from "react"
import { Streamlit } from "streamlit-component-lib"
import NotificationProvider from "../NotificationProvider/NotificationProvider"
import LoginForm from "../LoginForm/LoginForm"
import "../index.css"

export default function LoginPage() {
  // Use effect hook to resize the streamlit frame.
  // This is being called each time as prescribed in the streamlit docs.
  useEffect(() => {
    Streamlit.setFrameHeight(850)
  })
  return (
    <div className="LoginPage">
      <NotificationProvider>
        <LoginForm />
      </NotificationProvider>
    </div>
  )
}
